import { Express, Request, Response, } from "express";
import UserModel from "../models/user.model";
// import { InsertData } from "./connect";

export default function routes(app:Express){

    app.get('/healthcheck',(req:Request, res:Response)=>res.sendStatus(200).json('og no'));

    app.get('/',(req:Request,res:Response)=>{res.send("Server is connected to you")});
   
    app.get('/register',(req:Request,res:Response)=>{res.send("Register page READY")});

    // app.post('/register',(req:Request,res:Response)=>{
    //    console.log(req.body)
    //    res.send(req.body.email)
    //    InsertData(req.body.email,req.body.password)
    // //    
    // });
}




