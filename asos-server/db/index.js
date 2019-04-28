const mongoose = require("mongoose");

const DB_HOST = "192.168.99.100";
const DB_PORT = 27017;
const DB_NAME = "admin";

const DB_USERNAME = "root";
const DB_PASSWORD = "example";

let dbConnection;

async function initConnection() {
  dbConnection = await mongoose.connect(
    `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`,
    { auth: { user: DB_USERNAME, password: DB_PASSWORD } }
  );
}

function getConnection() {
  return dbConnection;
}

module.exports = { initConnection, getConnection };
