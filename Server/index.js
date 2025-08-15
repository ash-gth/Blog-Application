import express from "express";
import dotenv from 'dotenv'
import  Connection from "./database/db.js";
import router from './Routes/route.js'

dotenv.config();

const app = express();
app.use('/' , router);
const PORT = process.env.PORT ;

await Connection();
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
 



