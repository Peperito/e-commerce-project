const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000;
const db = require('./queries')
require('dotenv').config();

const app = express();

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/users', db.getUsers);

app.get('users/:id', db.getUserById);

app.post('/users', db.createUser);

app.put('/users/:id', db.updateUser);

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API for e-commerce Project' })
})


app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
  });

module.exports = router;