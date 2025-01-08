import { DeleteUserUseCase } from "./deleteUserUseCase";
import { Request,Response } from "express";

export class DeleteUserController{
    constructor(private deleteUserUsecase:DeleteUserUseCase){}

    async handle(request:Request,response:Response){

        try {

            let {id} = request.params;
            let user = await this.deleteUserUsecase.execute(id);

            return response.status(200).json("User deleted sucessfully");
        } catch (error) {
            return response.status(400).json(error);
        }


    }
}