const Pool = require('pg').Pool;
require('dotenv').config();
const bcrypt = require("bcrypt");

const Redis = require("redis");
const redisClient = Redis.createClient();
const DEFAULT_EXPIRATION = 3600;
const router = require("express").Router();

redisClient.on('connect', function(){
  console.log("Redis Connected!");
});


const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT
});


const getUserById = (req, res) => {
  const id = parseInt(req.params.id);
  
  if (req.session.userid == id){
    pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      const data = JSON.stringify(results.rows[0]);
      res.status(200).json(JSON.parse(data));
    })
  }
  else {
    res.status(301).send("You do not have access to this account");
  }

};



const  createUser = async (req, res) => {
  const { username, password, email } = req.body;

  // const stringPassword = JSON.stringify(password);
  const hashedPassword = await bcrypt.hash(password, 10);

  pool.query('INSERT INTO users (username, password, email) VALUES ($1, $2, $3) RETURNING *',
   [username, hashedPassword, email], (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows[0]);
  })
};



const loginUser = async (req, res) => {
  const {username, password} = req.body;

  pool.query('SELECT * FROM users WHERE username=$1', [username], async (error, results) => {
    if (error) {
     throw error
   }
    const obtainedPassword = results.rows[0].password;

    const matchedPassword = await bcrypt.compare(password, obtainedPassword);

    if(matchedPassword){

      req.session.authenticated = true;
      req.session.userid = results.rows[0].id;

      console.log("Session created")
      res.status(200).send({username: results.rows[0].username, userid: req.session.userid});
  
    }
    else { res.status(300).send(`Wrong Password`) }
  })
};



const updateUser = (req, res) => {
  const id = parseInt(req.params.id)
  const { username, email, first_name, last_name, address, telephone } = req.body

  pool.query(
    'UPDATE users SET username = $1, email = $2, first_name = $3, last_name = $4, address = $5, telephone=$6 WHERE id = $7',
    [username, email, first_name, last_name, address, telephone, id],
    (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).send(`User modified with ID: ${id}`)
    }
  )
}

const deleteUser = (req, res) => {
  const id = parseInt(req.params.id)

  pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).send(`User deleted with ID: ${id}`)
  })
}


module.exports = { getUserById, createUser, updateUser, deleteUser, loginUser};
