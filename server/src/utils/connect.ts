import mongoose from "mongoose";
import config from "config";

async function connect() {
  const dburi = config.get<string>("dburi");
  
  try{
    mongoose.set('strictQuery', false);
    await mongoose.connect(dburi,()=>{console.log('Connected to DB')})
  }catch(error){
    console.error('Could not connect to DB');
    process.exit(1);
  }
}
export default connect;
