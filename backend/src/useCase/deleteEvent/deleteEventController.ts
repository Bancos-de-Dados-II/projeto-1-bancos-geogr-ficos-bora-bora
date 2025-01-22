import { DeleteEventUseCase } from "./deleteEventUseCase";
import { Request,Response } from "express";

export class DeleteEventController{
    constructor(private deleteEventUseCase:DeleteEventUseCase){}

    async handle(request:Request,response:Response){
        try {
            let {id} = request.params;

            let eventDeleted = await this.deleteEventUseCase.execute(id);

            return response.status(200).json("Evento deletado com sucesso")
        } catch (error:any) {
            return response.status(400).json({message:error.message});
        }
    }
}
