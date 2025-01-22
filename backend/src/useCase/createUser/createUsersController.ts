import { CreateUsersUseCase } from "./createUsersUseCase";
import { CreateUserDTO } from "./createUsersDTO";
import {Request,Response} from "express";
import {z} from "zod";

export class CreateUsersController{
    constructor(private createUsersUseCase:CreateUsersUseCase){}

    async handle(request:Request,response:Response){
        try {
            
            CreateUserDTO.parse(request.body);

            const data:z.infer<typeof CreateUserDTO> = request.body;

            const userCreated:any = await this.createUsersUseCase.execute({...data});

            console.log(userCreated);
            
            
            return response.json({
                id:userCreated.id,
                name:userCreated.name,
                email:userCreated.email,
                cpf:userCreated.cpf,
                foto:userCreated.foto,
                telefone:userCreated.telefone,
                idade:userCreated.idade,
                organizador:userCreated.organizador,
                password:userCreated.password
            })

        } catch (error:any) {
            
            console.log(request.body);
            return response.status(400).json({
                message:error.message
            });
        }
    }
}