import { FindByTitleEventUseCase } from "./findByTitleEventUseCase";
import { Request,Response } from "express";


export class FindByTitleEventController{
    constructor(private findByTitleEventUseCase:FindByTitleEventUseCase){}

    async handle(request:Request,response:Response){
       try {
            const {name} = request.params;
            const event = await this.findByTitleEventUseCase.execute(name);
            if(!event){
                throw Error("Não existe evento com esse nome!");
            }

            return response.status(200).json(event);

       } catch (error:any) {

        return response.status(400).json({message:error.message});
        
       }

    }
}