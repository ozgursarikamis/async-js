const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'TestDb';
const client = new MongoClient(url);

// Use connect method to connect to the server
client.connect(function(err) {
  //assert.equal(null, err);
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  
//////////////////////////////////////////////////////////
    const findDocuments = function(db, callback) {
        // Get the documents collection
        const collection = db.collection('TestData');
        // Find some documents
        collection.find({id: 1000}).toArray(function(err, docs) { 
            console.log("Found the following records");
            console.log(docs)
            callback(docs);
        });
    }

    findDocuments(db, docs => {
        console.log(docs);
    })
});
