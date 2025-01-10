import { SaveImageUserUseCase } from "./saveImageUserUseCase";
import { Request,Response} from "express";
import path from "path";


export class SaveImageUserController{
    constructor( private saveImageUserUseCase:SaveImageUserUseCase){}

    async handle(request:Request,response:Response){
        try {
            
            const requestImage = request.file;
            const fileName = requestImage?.filename.toString() || "";

            console.log(path.resolve("./src/uploads"));
            

            await this.saveImageUserUseCase.execute(request.userId, fileName);

            return response.status(200).json(requestImage);

        } catch (error:any) {
            return response.status(400).json({Error:error.message});
        }
    }
}