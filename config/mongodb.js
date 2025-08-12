import mongoose from "mongoose";


const connectDB=async()=>{
    /*mongoose.connection se tum MongoDB ke saath ka connection object lete ho.
    .on('connected', callback) ka matlab:
    Jab bhi database successfully connect ho jaye, ye 'connected' event trigger hoga.
    Callback ke andar:*/
    
    mongoose.connection.on('connected',()=>{
        console.log("Database connected");
    })
    
    await mongoose.connect(`${process.env.MONGODB_URI}/imagify`)
    // ${process.env.MONGODB_URI} ek environment variable hai jisme tumhare MongoDB server ka base URL hoga.
    // /imagify ka matlab: Tum imagify naam ka database use kar rahe ho.
}



export default connectDB;