import { UpdateEventUseCase } from "./updateEventUseCase";
import { Request,Response } from "express";
import { updateEventDTO } from "./updateEventDTO";
import {z} from "zod";


export class UpdateEventController{
    constructor(private updateEventUseCase:UpdateEventUseCase){}

    async handle(request:Request,response:Response){
        try {
            updateEventDTO.parse(request.body);

            let {id} = request.params;

            let data:z.infer<typeof updateEventDTO> = request.body;

            let updateEvent = await this.updateEventUseCase.execute(id,data);
            return response.status(200).json(updateEvent);
        } catch (error:any) {
            return response.status(400).json({message:error.message});
        }
    }
}