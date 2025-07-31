import express from "express";
import { GoogleGenAI } from "@google/genai";
import "dotenv/config";
 import cors from "cors";
 import mongoose from "mongoose";
const app=express();
const ai = new GoogleGenAI({apiKey:process.env.GEMINI_API_KEY});
import chatRoutes from "./routes/chat.js";


 app.use(express.json());

 app.use(cors());
 app.use("/api", chatRoutes);
// app.get("/",(req,res)=>{
//     res.send("Hello, World!");
// });

// app.post("/test",async(req,res)=>{
//   const response = await ai.models.generateContent({
//     model: "gemini-2.5-flash",
//     contents: "Explain how AI works in a few words",
//   });
//   console.log(response.text);
//   res.send(response);
  
// })

app.listen(8080,()=>{
    console.log("Server is running on port 8080");
    connectDB();
});

const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected with database");   
    }
catch(error){
    console.error("Error connecting to MongoDB:", error);
  }
};