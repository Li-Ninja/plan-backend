const mongoose = require('mongoose');

require('./env');

const dbUri = process.env.DB
                .replace('<DB_PASSWORD>', process.env.DB_PASSWORD)
                .replace('<DB_NAME>', process.env.DB_NAME);
let dbConnection;

const connectToServer = () => {
  mongoose.connect(dbUri)
    .then(() => {
      console.info("Successfully connected to MongoDB.");
    })
    .catch(err => {
      console.err('Failed connect', err);
    })
};

module.exports = {
  connectToServer,
  getDb: () => dbConnection
};