import { ChangePasswordUserUseCase } from "./changePasswordUserUseCase";
import { changePasswordUserDTO } from "./changePasswordUserDTO";
import { Request,Response } from "express";
import {z} from "zod"

export class ChangePasswordUserController{
    constructor(private changePasswordUserUseCase:ChangePasswordUserUseCase){}

    async handle(request:Request,response:Response){
        try {
                
            let id = request.userId;

            changePasswordUserDTO.parse(request.body);

            const data:z.infer<typeof changePasswordUserDTO> = request.body;

            await this.changePasswordUserUseCase.execute(id,data.oldPassword,data.newPassword);

            return response.status(200).json("Senha alterada com sucesso!");
        } catch (error:any) {
            return response.status(400).json({message:error.message});
        }
    }
}