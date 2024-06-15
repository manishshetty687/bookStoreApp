import express from "express";
import dotenv from "dotenv";
import bookRoute from "./route/book.route.js";
import mongoose from "mongoose";
import cors from "cors";
import userRoute from "./route/User.route.js";
const app = express();
app.use(cors());
dotenv.config();
const PORT = process.env.PORT||4000

const URL=process.env.URL
console.log(URL);
const connect =async()=>{
  try {
    console.log("yet to connect w the DB");
    await mongoose.connect(URL);
    console.log("Connected to mongoDB");
  } catch (error) {
    console.log("Error: ", error);
  }
}
app.use("/book",bookRoute);
app.use(express.json());
app.use("/user",userRoute);
app.listen(PORT, () => {
  connect();
  console.log(`Example app listening on port ${PORT}`);
})
