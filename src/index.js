//importing the env variables
//using traditional way which is require
// require('dotenv').config({path: './env'});

//now using moduler way
import dotenv from 'dotenv';
import mongoose from 'mongoose';
//import {DB_NAME} from './constants';
import connectDB from './db/index.js'
import express from 'express';
const app = express();

//configuring the donenv
dotenv.config({
  path: './env'
})
connectDB();


/* this is our first approach to connect to the database
//it is better to start with ; when using iffe.
(async () => {
  try {
    // Connect to MongoDB
    //await mongoose.connect(`mongodb://localhost/${DB_NAME}`);
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", () =>{
      console.log("Error is : ", error);
      throw error;
    });
    app.listen(process.env.PORT, ()=>{
      console.log(`App is listening on the port number ${process.env.port}`);
    })

  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
})();

*/