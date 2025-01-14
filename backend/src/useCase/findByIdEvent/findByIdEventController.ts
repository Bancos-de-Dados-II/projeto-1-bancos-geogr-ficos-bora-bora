import { FindByIdEventUseCase } from "./findByIdEventUseCase";
import { Request,Response } from "express";


export class FindByIdEventController{
    constructor(private findByIdEventUseCase:FindByIdEventUseCase){}

    async handle(request:Request,response:Response){
        try {
            let {id} = request.params;

            let event = await this.findByIdEventUseCase.execute(id);
            return response.status(200).json(event);
        } catch (error:any) {
            response.status(400).json({message:error.message});
        }
    }
}