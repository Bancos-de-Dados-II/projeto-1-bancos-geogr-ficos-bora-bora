import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

 class GenerateToken{
    async execute(userId:string){

        const secret = String(process.env.SECRET);

        const token = jwt.sign({},secret,{
            expiresIn:'1d',
            subject:userId
        });

        return token;
    }
}

export default new GenerateToken;