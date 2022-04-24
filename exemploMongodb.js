// CRUD MONGO
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const ObjectId = require('mongodb').ObjectId
// const {MongoClient, ObjectId} = require('mongodb');
const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

// Create our object Id
// const id = new ObjectId()
// console.log(id.toHexString()) // para ver somente o Object id

// Create - InsertOne and InsertMany
// MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
//   if(error) {
//     return console.log("Não foi possivel conectar");
//   }
//   const db = client.db(databaseName);

  // db.collection('users').insertMany([
  //   {
  //     name: 'Carlos',
  //     age: 28,
  //   }, {
  //     name: 'Gabrielle',
  //     age: 23,
  //   }
  // ], (error, result) => {
  //   if(error) {
  //     return console.log('Nao foi possivel Inserir')
  //   } else {
  //     console.log(result.insertedIds)
  //   }
  // })
  // db.collection('tasks').insertMany([
  //   {
  //     description: "learn SOLID",
  //     completed: false,

  //   },
  //   {
  //     description: "Study Clean Architecture",
  //     completed: false,

  //   },
  //   {
  //     description: "learn postman",
  //     completed: false,

  //   }
  // ], (error, result) => {
  //   if(error) return console.log("erro")
  //   console.log(result.acknowledged)
  // })
// })


// Read
MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
  if(error) {
    return console.log("Não foi possivel conectar");
  }
  const db = client.db(databaseName);

  // db.collection('users').findOne({name: 'Jacqueline'}, (error, user) => {
  //   if(error) return console.log(error);
  //   console.log(user)
  // })
  // db.collection('users').find({name: 'Victor'}).toArray((error, users) => {
  //   if(error) return console.log(error);
  //   console.log(users)
  // })
  // db.collection('users').find({name: 'Victor'}).count((error, users) => {
  //   if(error) return console.log(error);
  //   console.log(users)
  // })
  // db.collection('tasks').find({completed: false}).toArray((error, tasks) =>{
  //   if(error) return console.log(error);
  //   console.log(tasks)
  // })

  // Update
  // const updateTask = db.collection('tasks').updateOne(
  //   {
  //   _id: new ObjectId("6261705c19cc4217995d4f96")
  //   },
  //   {
  //     $set: {
  //       description: 'new Task'
  //     }
  //   }
  // );

  // updateTask.then((result) => {
  //   console.log(result)
  // }).catch(() => {
  //   console.log(error)

  // })


  // const updateTasks = db.collection('tasks').updateMany(
  //   {
  //     completed: false
  //   },
  //   {
  //     $set: {
  //       completed: true
  //     }
  //   }
  // );
  // updateTasks.then((result) => {
  //   console.log(result)
  // }).catch(() => {
  //   console.log(error)

  // })

  // Delete
  // db.collection('users').deleteMany({
  //   age: 28
  // }).then((result) => {
  //   console.log(result)
  // }).catch((error) => {
  //   console.log(error)
  // })
})
