import mongoose from "mongoose";
import { db_name } from "../constants.js";
const connectDB = async ()=>{
    try {
        const connInst = await mongoose.connect(`${process.env.MONGODB_URI}/${db_name}`);
        console.log(`MongoDB connected !! Host: ${connInst.connection.host}`);
    } catch (error) {
        console.log(`MongoDB ERROR: ${error.message}`);
    }
}

export default connectDB;