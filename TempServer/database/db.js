import mongoose from "mongoose";

const Connection = async() => {
    const DB_URI = process.env.DB_URI;
     
    try{
    await mongoose.connect(DB_URI);
    console.log("db connected successfully");
    }
    catch(error){
    console.log("db not connected error");
    }
}
export default Connection