import { FindAllEventsUseCase } from "./findAllEventsUseCase";
import { Request,Response } from "express";


export class FindAllEventsController{
    constructor(private findAllEventsUsecase:FindAllEventsUseCase){}

    async handle(request:Request,response:Response){
        let events =  await this.findAllEventsUsecase.execute();
        return response.status(200).json(events);
    }
}
