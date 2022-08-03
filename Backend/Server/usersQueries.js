const Pool = require('pg').Pool;
require('dotenv').config();
const bcrypt = require("bcrypt");

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT
});

const getUsers = (request, response) => {
    pool.query('SELECT first_name, last_name, created_at, modified_at FROM users ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
};

const getUserById = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
};

const  createUser = async (request, response) => {
  const { username, password, first_name, last_name, email, address, telephone } = request.body;

  const stringPassword = JSON.stringify(password);
  const salt = await bcrypt.genSalt(10); 
  const hashedPassword = await bcrypt.hash(stringPassword, salt);

  pool.query('INSERT INTO users (username, password, first_name, last_name, email, address, telephone) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
   [username, hashedPassword, first_name, last_name, email, address, telephone], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User added with ID: ${results.rows[0].id}`).redirect('/login');
  })
};

const updateUser = (request, response) => {
  const id = parseInt(request.params.id)
  const { first_name, last_name, email } = request.body

  pool.query(
    'UPDATE users SET first_name = $1, last_name = $2, email = $3 WHERE id = $4',
    [first_name, last_name, email, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User modified with ID: ${id}`)
    }
  )
}

const deleteUser = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User deleted with ID: ${id}`)
  })
}


module.exports = {getUsers, getUserById, createUser, updateUser, deleteUser};