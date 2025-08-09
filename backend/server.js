import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import {connect} from "./connection/connectDb.js"
import urlroutes from "./routes/urlroutes.js"
dotenv.config();
const app=express();
app.use(express.json());
app.use(cors({
    origin: "https://assignment-1-3zh2.onrender.com", 
    methods: ["GET", "POST",],
    credentials: true
  }));
  
app.use(express.json());
app.get("/",(req,res)=>{
    return res.status(201).json({working: "yes"})
})
app.use("/api",urlroutes);
connect();
const PORT=process.env.PORT||3000;
app.listen(PORT,()=>{console.log(`server is listening on Port ${PORT}`)})
