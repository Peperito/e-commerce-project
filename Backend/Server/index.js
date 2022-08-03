const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3001;
const dbUsers = require('./usersQueries')
require('dotenv').config();
const bcrypt = require("bcrypt");

const app = express();

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/users', dbUsers.getUsers);

app.get('users/:id', dbUsers.getUserById);

app.post('/users', dbUsers.createUser);

app.put('/users/:id', dbUsers.updateUser);

app.delete('/users/:id', dbUsers.deleteUser);

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API for e-commerce Project' })
})


app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
  });

module.exports = router;