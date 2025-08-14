import mongoose from "mongoose"


export const Connection = async() =>{
    const URL= process.env.MONGO_URL;

    try {

       await mongoose.connect(URL);
       console.log("db connected succefully ")
    }catch(error){
   console.log("error", error);
}
}

export default  Connection;