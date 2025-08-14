import express from "express";
import dotenv from "dotenv";



import Connection from "./database/db"; 

const app = express();
dotenv.config();
const PORT = process.env.PORT;

await Connection();
app.listen(PORT , () => {console.log(`server is running on port ${PORT}`)})
