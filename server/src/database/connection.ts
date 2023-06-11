import { connect } from "mongoose"
let url='mongodb+srv://neeraj-maurya:neeraj-maurya@cluster0.w4mu8h9.mongodb.net/NewDB'
function connectToMongoDB(){
  return connect(url).then(()=>console.log("DB Connection Succeefully")).catch(()=>console.log("Something went wrong"))
}
connectToMongoDB()


 
// import { MongoClient, MongoClientOptions, Db, Collection } from 'mongodb';
// import mongoose, { Schema, Document, Model } from 'mongoose';

// const url = process.env.MONGODB_URI;
// const options: MongoClientOptions = {
//     connectTimeoutMS: 30000, // Increased timeout to 30 secondsncreased timeout to 30 seconds
// };;

// // Define the schema for the todo item
// // interface TodoItem extends Document {
// //   text: string;
// //   completed: boolean;
// // }

// // const TodoItemSchema = new Schema<TodoItem>({
// //   text: { type: String, required: true },
// //   completed: { type: Boolean, required: true },
// // });

// // Define the model for the todo item
// //  const TodoItemModel: Model<TodoItem> = mongoose.model<TodoItem>('TodoItem', TodoItemSchema);
// // export default TodoItemModel;
//   const connectToMongoDB = async () => {
//   try {
//     const client = await MongoClient.connect('mongodb://localhost:27017/dffdf?useNewUrlParser=true&useUnifiedTopology=true');
//     console.log('Connected to MongoDB');

//     const db: Db = client.db('dffdf'); // Replace 'dffdf' with your desired database name

//     // Create the collection if it doesn't exist
//     // await db.createCollection('todos');
//     // console.log('Todos collection created');

//     // // Perform desired actions with the model
//     // const todo = new TodoItemModel({ text: 'Sample todo', completed: false });
//     // await todo.save();
//     // console.log('Document inserted');

//     // // Other operations can be performed here

//     // // Close the MongoDB connection when done
//     // client.close();
//     // console.log('Connection closed');
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error);
//   }
// };

// connectToMongoDB();






// // // import { MongoClient, Db, Collection, MongoClientOptions } from 'mongodb';
// // import dotenv from 'dotenv';
// // dotenv.config();
// // import { MongoClient, MongoClientOptions, Db, Collection } from 'mongodb';

// // // const url = process.env.MONGODB_URI;
// // const options: MongoClientOptions = {};

// // const connectToMongoDB = async () => {
// //   let todosCollection: Collection;
// //   try {
// //     const client = await MongoClient.connect("mongodb://localhost:27017/", options);
// //     console.log('Connected to MongoDB');

// //     const db: Db = client.db('dffdf'); // Replace 'dffdf' with your desired database name

// //     todosCollection = db.collection('todos');
// //     console.log('Todos collection created');

// //     // Perform desired actions with the collection
// //     // For example, insert a document
// //     await todosCollection.insertOne({ text: 'Sample todo', completed: false });
// //     console.log('Document inserted');

// //     // Other operations can be performed here

// //     // Close the MongoDB connection when done
// //     client.close();
// //     console.log('Connection closed');
// //   } catch (error) {
// //     console.error('Error connecting to MongoDB:', error);
// //   }
// // };

// // connectToMongoDB();
















// // let todosCollection: Collection;

// // const url=url:string = process.env.MONGODB_URI;
// // // const options: MongoClientOptions = {
// // //   useNewUrlParser: true,
// // //   useUnifiedTopology: true,
// // // };

// // const connectToMongoDB = async () => {
// //   try {
// //     const client: MongoClient = await MongoClient.connect(url);
// //     const db: Db = client.db();
// //     todosCollection = db.collection('todos');
// //     console.log('Connected to MongoDB');
// //   } catch (error) {
// //     console.error('Error connecting to MongoDB:', error);
// //   }
// // };

// // connectToMongoDB();

// // Rest of the code...

















// // import { MongoClient, MongoClientOptions,Db,Collection } from 'mongodb';

// // const url = process.env.MONGODB_URI;
// // const options: MongoClientOptions = {
// // };

// // const connectToMongoDB = async () => {
// //   let todosCollection: Collection;
// //   try {
// //     const client = await MongoClient.connect("mongodb://localhost:27017/dffdf", options);
// //     console.log('Connected to MongoDB');
// //   } catch (error) {
// //     console.error('Error connecting to MongoDB:', error);
// //   }
// // };

// // connectToMongoDB();
