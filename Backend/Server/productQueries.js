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


const getCars= async (req, res) => {

    const page = parseInt(req.params.page);
    const start = 1
    const stop = 9

    //Connect to Redis if not already done
    if (!redisClient.isOpen) await redisClient.connect();
  
    // check if data already in cache
    const cars = await redisClient.get("cars");
    if (cars != null) {
      return res.status(200).json(cars);
    };
  
    // get data fom DB and add to redis for 1hour
    pool.query('SELECT name, description, price FROM product WHERE category = "car" ORDER BY name ASC LIMIT $1,$2', [start, stop], async (error, results) => {
      if (error) {
        throw error
      }
      redisClient.setEx(cars, DEFAULT_EXPIRATION, JSON.stringify(results.rows));
      res.status(200).json(results.rows); 
     });
  };
  
  
  module.exports = { getCars }; 

