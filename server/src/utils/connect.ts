// import { MongoClient, Db, Collection } from "mongodb";
// import { EphemeralKeyInfo } from "tls";
// import UserModel from "../models/user.model";

// // Connection URI
// const uri =
//   "mongodb+srv://gurukudte:gk111257@geekyzindagi.2qu3wna.mongodb.net/?retryWrites=true&w=majority";

// async function fetchData() {
//   const client = new MongoClient(uri);
//   try {
//     await client.connect();
//     console.log("Connected To DATABASE Successfully");
//   } catch (err) {
//     console.log(err);
//   } finally {
//     client.close();
//   }
// }

// async function InsertData(email:string , password:string) {
//   const client = new MongoClient(uri);
//   try {
//     console.log("Connected To Collection Users");
//     const collection: Collection = client.db("Users_Database").collection("Users");

//     collection.createIndex({ email: 1 }, { unique: true }, function(err, result) {
//       client.close();
//     });

//     collection.insertOne({email, password}, function (err, res) {
//       console.log("Document inserted");
//       // console.log(collection.findOne())
//       client.close();
//     });
//   } catch (err) {
//     console.log(err);
//   } finally {
//     client.close();
//   }
// }

// export {fetchData,InsertData} ;

import mongoose from "mongoose";
import config from "config";

async function connect() {
  const dburi = config.get<string>("dburi");
  
  try{
    mongoose.set('strictQuery', false);
    await mongoose.connect(dburi,()=>{console.log('Connected to DB')})
  }catch(error){
    console.error('Could not connect to DB');
    process.exit(1);
  }
}
export default connect;
