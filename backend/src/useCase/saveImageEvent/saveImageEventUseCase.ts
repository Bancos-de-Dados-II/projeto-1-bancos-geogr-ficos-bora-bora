import { IEventRepository } from "../../repositories/IEventRepository";
import { Event } from "../../types/Event";

export class SaveImageEventUseCase{
    constructor(private eventRepository:IEventRepository){}

    async execute(id:string,imagem:string){
        let event = await this.eventRepository.findById(id) as Event;

        let newEvent = {
            ...event,
            imagem
        }

        if(!event){
            throw Error("Evento não encontrado");
        }

        await this.eventRepository.updateEvent(id,newEvent);
        return;
    }
}