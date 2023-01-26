import { Express, Request, Response, } from "express";
import UserModel from "../models/user.model";

export default function routes(app:Express){
    app.get('/healthcheck',(req:Request, res:Response)=>res.sendStatus(200).json('og no'))
    app.get('/',(req:Request,res:Response)=>{res.send("Server is connected to you")})
    app.get("/register", async (req, res) => {
        try {
          const newUser = new UserModel({
            email: "tahmid@gmail.com",
            password: "123456"
          });
      
          const user = await UserModel.create(newUser);
          res.status(200).json(user);
        } catch (err) {
          console.log(err);
          res.status(500).json(err);
        }
      });
}
