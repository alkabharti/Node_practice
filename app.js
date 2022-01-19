const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/newDB');

const schema = new mongoose.Schema({
    name: String,
    age: Number
});

const obj=mongoose.model("Person",schema);

const obj1=new obj({
    name:"Alka",
    age: 24
});

obj1.save();


// const { MongoClient } = require("mongodb");

// // Connection URI
// const uri =
//   'mongodb://localhost:27017/?maxPoolSize=20&w=majority';

// // Create a new MongoClient
// const client = new MongoClient(uri);

// async function run() {
//   try {
//     // Connect the client to the server
//     await client.connect();

//     // Establish and verify connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Connected successfully to server");
//     const docs = [
//         { name: "Sicilian pizza", shape: "square" },
//         { name: "New York pizza", shape: "round" },
//         { name: "Grandma pizza", shape: "square" }
//      ];
//      const insertManyresult = await client.db("admin").collection("fruits").insertMany(docs);
//      let ids = insertManyresult.insertedIds;
//      console.log(`${insertManyresult.insertedCount} documents were inserted.`);
//      for (let id of Object.values(ids)) {
//         console.log(`Inserted a document with id ${id}`);
//      }
  
//  }
//   finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

// try {
//     const docs = [
//        { "_id": 1, "color": "red"},
//        { "_id": 2, "color": "purple"},
//        { "_id": 1, "color": "yellow"},
//        { "_id": 3, "color": "blue"}
//     ];
 
//     const insertManyresult = await collection.insertMany(docs);
//     let ids = insertManyresult.insertedIds;
 
//     console.log(`${insertManyresult.insertedCount} documents were inserted.`);
//     for (let id of Object.values(ids)) {
//        console.log(`Inserted a document with id ${id}`);
//     }
//  } catch(e) {
//     console.log(`A MongoBulkWriteException occurred, but there are successfully processed documents.`);
//     let ids = e.result.result.insertedIds;
//     for (let id of Object.values(ids)) {
//        console.log(`Processed a document with id ${id._id}`);
//     }
//     console.log(`Number of documents inserted: ${e.result.result.nInserted}`);
//  }
