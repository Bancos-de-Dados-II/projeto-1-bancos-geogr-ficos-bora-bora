import { FindAllUsersUseCase } from "./findAllUsersUseCase";
import { Request,Response } from "express";

export class FindAllUsersController{

    constructor(private findAllUsersUseCase:FindAllUsersUseCase){}

    async handle(request:Request,response:Response){

        const users = await this.findAllUsersUseCase.execute();
        return response.json(users);
    }
}