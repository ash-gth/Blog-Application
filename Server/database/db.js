import mongoose from "mongoose"


export const Connection = async(username, password) =>{
    const URL= `mongodb+srv://${username}:${password}@cluster0.30zpyr6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

    try {

       await mongoose.connect(URL, { useNewUrlParser : true} );
       console.log("db connected succefully ")
    }catch(error){
   console.log("error", error);
}
}

export default  Connection;