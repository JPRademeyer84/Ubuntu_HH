const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,          // Database name
  process.env.DB_USER,          // Database user
  process.env.DB_PASSWORD,      // Database password
  {
    host: process.env.DB_HOST,  // Database host
    dialect: process.env.DB_DIALECT, // Database dialect
    port: process.env.DB_PORT,  // Database port
    logging: process.env.SEQUELIZE_LOGGING === 'true' ? console.log : false,
  }
);

module.exports = sequelize;
