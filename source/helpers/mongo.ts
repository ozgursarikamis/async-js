//const assert = require('assert');
const MongoClient = require('mongodb').MongoClient;

export default class Database {
    _collectionName: string;    
    constructor(collection: string) {
        console.log('collection :', collection);
        this._collectionName = collection;
    }

    Get(filter: object = null, callback): any {        

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

    } 
}