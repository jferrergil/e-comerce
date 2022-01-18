const mongoose = require('mongoose');
require('dotenv').config();

async function mongoConnect() {
  const user = process.env.DB_USER;
  const passwd = process.env.DB_PASSWORD;
  const databaseName = process.env.DB_NAME;

  const uri = `mongodb+srv://${user}:${passwd}@cluster1.3tloo.mongodb.net/${databaseName}?retryWrites=true&w=majority`;

  const mongooseConnect = await mongoose.connect(uri);
  return mongooseConnect;
}

module.exports = { mongoConnect };
