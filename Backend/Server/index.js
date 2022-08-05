const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3001;
const dbUsers = require('./usersQueries');
require('dotenv').config();

const bcrypt = require("bcrypt");
const helmet = require("helmet"); 
const cors = require("cors");

const session = require("express-session");
const store = new session.MemoryStore();

const app = express();

app.use(
	session({
		secret: "secret-key", //To be modified when I understand better 
    cookie: { maxAge: 1000 * 60 * 5 },
		saveUninitialized: false,
		store: store,
    resave: false,
	})
);

app.use(
  cors({
    origin: "http://localhost:3000", 
    methods: "*"
  })
);

function ensureAuthentication(req, res, next) {
  // Check auth
  if (req.session.authenticated) {
    return next();
  } else {
    res.status(403).json({ msg: "You're not authorized to view this page" });
  }
};


app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.use(helmet());
app.use(cors());



app.get('/users', dbUsers.getUsers);

app.get('/users/:id', ensureAuthentication, dbUsers.getUserById);

app.post('/register', dbUsers.createUser);

app.post('/login', dbUsers.loginUser);

app.put('/users/:id', dbUsers.updateUser);

app.delete('/users/:id', dbUsers.deleteUser);

app.get('/', (req, res) => {
  res.json({ info: 'Node.js, Express, and Postgres API for e-commerce Project' })
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
  });

module.exports = router;