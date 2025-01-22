import { z } from "zod";
import { UpdateUserDTO } from "./updateUserDTO"; 
import { UpdateUsersUseCase } from "./updateUsersUseCase";
import {Request,Response} from "express";

export class UpdateUsersController{
    constructor(private updateUsersUseCase:UpdateUsersUseCase){}

    async handle(request:Request,response:Response){
        try {
            UpdateUserDTO.parse(request.body);

            let id = request.userId;
            let data:z.infer<typeof UpdateUserDTO> = request.body;

            let updatedUser = await this.updateUsersUseCase.execute(data,id);
            return response.status(200).json(updatedUser);
        } catch (error) {
            return response.status(400).json(error)
        }
    }
}