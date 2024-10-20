import dotenv from "dotenv";
dotenv.config();
import connectDB from "./db/index.js";
import { app } from "./app.js";

const port = process.env.PORT || 8000

connectDB().then(()=>{
    app.listen(port, (err)=>{
        console.log(`Server is running at ${port}`);
    })
}).catch((err)=>{
    console.log("Mongo DB ERROR: "+err)
})