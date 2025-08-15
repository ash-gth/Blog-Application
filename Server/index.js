import express from "express";
import dotenv from 'dotenv'
import  Connection from "./database/db.js";
import router from './Routes/route.js'
import cors from 'cors';
import bodyParser from "body-parser";


dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json({extended: true}))
app.use(bodyParser.urlencoded({extended: true }))

app.use('/' , router);
const PORT = process.env.PORT ;

await Connection();
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
 



