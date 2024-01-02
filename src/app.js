//Here we'll write express code
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
const app = express();

//use used to use the middleware
app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true,
}));

//configure handling the json data
app.use(express.json({
  limit: "16kb"
}));

//Configure. sometimes browser give url in different type which needs to endcoded.
app.use(express.urlencoded({
  extended: true,
  limit: "16kb"
}))

//configure public
app.use(express.static('public'));

//configure cookie parser
app.use(cookieParser());
export { app } 