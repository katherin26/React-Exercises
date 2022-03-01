import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import postRoutes from "./routes/posts.js";

const app = express();

dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);

/*Connect our server application with a real database for that we are going to use mongodb more specifically their
cloud atlas version of mongobd which means they are going to host our database on their cloud .*/

const PORT = process.env.PORT || 5000;

/*Mongoose = We use our mongoose to connect our database.
mongoose.connect(); = is a function that accepts two different parameters first one is going to be CONNECTION URL,
and the second one is an object with all the options, we're gonna use two different options.
first: useNewUrlParser: true, useUnifiedTopology:true
This return a promise = so, we need to have a then and a catch.
Then : inside the then we need to have app.listen  and this has two parameters the first is the PORT and the second 
one is going to be a callback application which is going to ran once our application succesfully listens. this is 
going to be a simple console.log(`Server running on port: ${PORT}`).
and finally if the connection to the database is not succesful we're going to have an error there and we are simply 
going to console.log(`error.message`).
and the final piece of setup is going to be mongoose.set and there we're going to set useFindAndModify to false.
*/

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set("useFindAndModify", false);
