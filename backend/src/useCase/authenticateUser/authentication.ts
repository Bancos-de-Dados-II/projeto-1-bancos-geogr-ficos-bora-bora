import { Request,Response } from "express";
import GenerateToken from "../../providers/GenerateToken";
import { IUserRepository } from "../../repositories/IUserRepository";
import bcrypt from "bcryptjs"

interface IDataRequest{
    email:string,
    password:string
}

class Authentication{
    constructor(private userRepository:IUserRepository){}

    async handle(request:Request,response:Response){
        try {
            const {email,password} = request.body;

            let user =  await this.userRepository.findByEmail(email);

            if(!user){
                throw Error("Usuário não encontrado ao tentar fazer login!");
            }

            const passwordVerify = await bcrypt.compare(password,user.password);

            if(!passwordVerify){
                throw Error("A senha não condiz com o usuário que está tentando loggar!");
            }

            const token = await GenerateToken.execute(user.id);

            return response.status(201).json(token);
        } catch (error:any) {
            return response.status(400).json({Error:error.message});
        }
    }   
}

export default Authentication;