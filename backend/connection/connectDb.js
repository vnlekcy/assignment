import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();
const mongo_link=process.env.MONGO_URI
export const connect =()=>mongoose.connect(mongo_link).then(()=>{
    console.log("connected to mongodb")
}).catch((err)=>{
    console.log(`error  ${err.message}`)
})