'use strict';

require('dotenv').config();

module.exports = {
  // DATABASE DEVELOPMENT
  "development": {
    "username": process.env.DB_USER || "",
    "password": process.env.DB_PASSWORD || "",
    "database": process.env.DB_NAME || "inventeory",
    "host": process.env.DB_SERVER || "localhost",
    "dialect": "postgres"
  },

  // DATABASE STAGING
  "test": {
    "username": process.env.DB_USER || "databaseuser",
    "password": process.env.DB_PASSWORD || "databasepassword",
    "database": process.env.DB_NAME || "databasename",
    "host": process.env.DB_SERVER || "localhost",
    "dialect": "postgres"
  },

  // DATABASE PRODUCTION
  "production": {
    "username": process.env.DB_USER || "databaseuser",
    "password": process.env.DB_PASSWORD || "databasepassword",
    "database": process.env.DB_NAME || "databasename",
    "host": process.env.DB_SERVER || "localhost",
    "dialect": "postgres"
  }
}
