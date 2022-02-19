require('dotenv').config();
module.exports = 
{
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PWD,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "port": process.DB_PORT,
    "dialect": process.env.BD_DIALECT,
    "logging": true,
  },
  "test": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PWD,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "port": process.DB_PORT,
    "dialect": process.env.BD_DIALECT,
    "logging": true,
  },
  "production": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PWD,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "port": process.DB_PORT,
    "dialect": process.env.BD_DIALECT,
    "logging": false,
  }
}
