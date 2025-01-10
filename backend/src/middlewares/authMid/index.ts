import { Request,Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config()


class AuthMid{

    async handle(request:Request,response:Response,next:NextFunction){
        try {
            
            const authToken = request.headers.authorization;

            if(!authToken){
                throw Error("Token não encontrado!");
            }

            const [, token] = authToken.split(" ");

            const secret = String(process.env.SECRET);
            const verification = jwt.verify(token,secret);

            request.userId = verification.sub?.toString() || ""
            next();

        } catch (error:any) {
            console.log(error);
            
            return response.status(400).json({message:error.message});
        }
    }
}

export default new AuthMid;