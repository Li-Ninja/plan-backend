const mongodb = require('mongodb');
const url = 'mongodb+srv://root:rootau4a83@mycluster.xr8zjdk.mongodb.net/?retryWrites=true&w=majority';
const client = new mongodb.MongoClient(url);
const objectId = mongodb.ObjectId;
let dbConnection = null;

module.exports = {
  connectToServer: (callback) => {
    client.connect((err, db) => {
      if (err || !db) {
        return callback(err);
      }
    })

    dbConnection = db.db('Plan');
    console.log('Successfully connected to MongoDB.');

    return callback;
  },

  getDb: () => {
    return dbConnection;
  }
}
