const Pool = require('pg').Pool;
require('dotenv').config();
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


const getProductsByCategory= async (req, res) => {

    const category = String(req.params.category);

    //Connect to Redis if not already done
    if (!redisClient.isOpen) await redisClient.connect();
  
    // check if data already in cache
    const products = await redisClient.get(category);
    if (products != null) {
      return res.status(200).json(JSON.parse(products));
    };
  
    // get data fom DB and add to redis for 1hour
    pool.query('SELECT name, description, category, price FROM product WHERE category = $1 ORDER BY name ASC', [category], async (error, results) => {
      if (error) {
        throw error
      }
      redisClient.setEx(category, DEFAULT_EXPIRATION, JSON.stringify(results.rows));
      res.status(200).json(results.rows); 
     });
  };
  
  
  module.exports = { getProductsByCategory }; 

