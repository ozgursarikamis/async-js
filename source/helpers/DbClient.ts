import { MongoClient, Db } from "mongodb";

export class DbClient {
  public db: Db;
  
  public connect() {
    // MongoClient.connect("mongodb://localhost:27017/TestDb", (err: any, db: any) => {
    //   if(err){
    //     console.log('err', err);
    //   } else {
    //     this.db = db;
    //   }
    // });

    return MongoClient.connect("mongodb://localhost:27017/TestDb")
    .then((db: any) => {
        this.db = db;
    })
    .catch(err => {
        console.log(err);
    });
  }
} 