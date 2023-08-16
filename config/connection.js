const Sequelize = require("sequelize");
require("dotenv").config();

let sequelize;

if (process.env.JAWSDB_URL) {
  // Use JAWSDB_URL from environment variables for deployment on Railway
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  // Use environment variables for local development
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST || "localhost", // Use the DB_HOST environment variable or default to 'localhost'
      dialect: "mysql",
      port: process.env.DB_PORT || 3306, // Use the DB_PORT environment variable or default to 3306
    }
  );
}

module.exports = sequelize;
