import * as L from 'leaflet'; 

delete (<any>L.Icon.Default.prototype)._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

export default class Map {    

    static LoadData(): void {        
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
          if (err !== null) {
            console.log("Connected successfully to server");
            const db = client.db(dbName);
            
          //////////////////////////////////////////////////////////
              const findDocuments = function(db, callback) {
                  // Get the documents collection
                  const collection = db.collection('TestData');
                  // Find some documents
                  collection.find({id: 1000}).toArray(function(err, docs) {
                      console.log("Found the following records");
                      // console.log(docs)
                      docs.forEach(doc => {
                          console.log('doc.latitude', doc.latitude);      
                          console.log('doc.longitude', doc.longitude);      
                          console.log('doc.first_name', doc.first_name);      
                          console.log('doc.last_name', doc.last_name);      
                      });
                      callback(docs);
                  });
              }
          
              findDocuments(db, docs => {
                  console.log(docs);
              })
          } else {
                console.warn('ERROR:', err);
          }
        });
                
    }
    static Start(): void {   
        var map = L.map('map').setView([32, 42], 2);    
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
    
        // L.marker([51.5, -0.09]).addTo(map)
        //     .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        //     .openPopup();
    }
}