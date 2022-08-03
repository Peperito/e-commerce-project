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
  
  pool.query('SELECT username, first_name, last_name, email FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows);
  })
};



const  createUser = async (request, response) => {
  const { username, password, first_name, last_name, email, address, telephone } = request.body;

  const stringPassword = JSON.stringify(password);
  const hashedPassword = await bcrypt.hash(stringPassword, 10);

  pool.query('INSERT INTO users (username, password, first_name, last_name, email, address, telephone) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
   [username, hashedPassword, first_name, last_name, email, address, telephone], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User added with ID: ${results.rows[0].id}`);
  })
};



const loginUser = async (request, response) => {
  const {username, password} = request.body;

  pool.query('SELECT * FROM users WHERE username=$1', [username], async (error, results) => {
    if (error) {
     throw error
   }
    const obtainedPassword = results.rows[0].password;

    const matchedPassword = await bcrypt.compare(password, obtainedPassword);
 
    if(matchedPassword){
    response.status(201).send(`Success login for user: ${results.rows[0].username}`);
    }
    else { response.status(300).send(`Wrong Password`) }
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


module.exports = {getUsers, getUserById, createUser, updateUser, deleteUser, loginUser};