const mongodb = require('mongodb');
const url = 'mongodb+srv://root:rootau4a83@mycluster.xr8zjdk.mongodb.net/?retryWrites=true&w=majority';
const client = new mongodb.MongoClient(url);

client.connect(async function(err) {
  if(err) {
    console.log('link error', err);
    return;
  }

  console.log('link success');
  client.close();
});