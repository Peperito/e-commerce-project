const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3001;
const dbUsers = require('./usersQueries');
var fs = require("fs");
var https = require("https");
require('dotenv').config();
const cors = require("cors");

const session = require("express-session");
const store = new session.MemoryStore();

const app = express();

https
  .createServer(
    {
      key: fs.readFileSync(process.env.SSL_KEY_FILE),
      cert: fs.readFileSync(process.env.SSL_CRT_FILE)
    },
    app
  )
  .listen(PORT, function () {
    console.log(
      "Example app listening on port 3001! Go to https://localhost:3001/"
    );
  });


app.set('trust proxy', 1);

app.use(
	session({
		secret: "sessiontest", //To be modified when I understand better 
    cookie: { maxAge: 1000 * 60 * 60, secure: true, sameSite:"lax"},
		saveUninitialized: false,
		store: store,
    resave: false,
	})
);

app.use(
  cors({
    origin: ['https://localhost:3000'],
    methods: ["POST", "PUT", "GET", "DELETE", "HEAD", "OPTIONS"],
    credentials: true
  })
);


function ensureAuthentication(req, res, next) {
  // Check auth
  if (req.session.authenticated) {
    console.log("passed Authentication")
    return next();
  } else {
    console.log("failed authentication");
    res.status(403).json({ msg: "You're not authorized to view this page" });
  }
};


app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);


app.get('/users', dbUsers.getUsers);

app.get('/users/:id', ensureAuthentication, dbUsers.getUserById);

app.post('/register', dbUsers.createUser);

app.post('/login', dbUsers.loginUser);

app.put('/users/:id', dbUsers.updateUser);

app.delete('/users/:id', dbUsers.deleteUser);

app.get("/logout", (req, res) => {
	req.logout();
	res.redirect("/");
});

app.get('/', (req, res) => {
  res.json({ info: 'Node.js, Express, and Postgres API for e-commerce Project' })
});

module.exports = router;