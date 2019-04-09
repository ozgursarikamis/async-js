var MongoClient = require('mongodb').MongoClient;
var _db: any;

module.exports = {

  connectToServer: function(callback) {
    MongoClient.connect( "mongodb://localhost:27017/TestDb", function(err: any, db: any) {
      _db = db;
      return callback(err);
    } );
  },

  getDb: function() {
    return _db;
  }
};