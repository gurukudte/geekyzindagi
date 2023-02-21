import mongoose from "mongoose";
import config from "config";

async function connect() {
  const dburi = config.get<string>("dburi");

  try {
    mongoose.set("strictQuery", false);

    const client = await mongoose.connect(dburi, () => {
      console.log("Connected to DB");
    });
  } catch (error) {
    console.error("Could not connect to DB");
    process.exit(1);
  }
}
export default connect;

// const UserSchema = new mongoose.Schema({
//   email: String,
//   firstName: String,
//   lastName: String,
//   password: String,
// });

// const UserModel = mongoose.model("User", UserSchema);

// const kiran = new UserModel({
//   email: "gk111@gmail.com",
//   firstName: "guru",
//   lastName: "kudte",
//   password: "qwertyuiop",
// });
