import { FindUserUseCase } from "./findUserUseCase";
import { Request,Response } from "express";

export class FindUserController{
    constructor(private findUserUsecase:FindUserUseCase){}

    async handle(request:Request,response:Response){
         
        const {id} = request.params;
        
        let user = await this.findUserUsecase.execute(id);
        return user;
    }
}