import mongoose from "mongoose";
import UserModel from '../models/user.model';

// const record

export default async function connect(){
    const dburi =  '';

    try{      
        mongoose.set("strictQuery", false);  
        await mongoose.connect(dburi,()=>{
            console.log(`successfully connected to DATABASE`)
        },)
        
    }
    catch(error){
        console.error('could not connect')
        process.exit(1)
    }
}