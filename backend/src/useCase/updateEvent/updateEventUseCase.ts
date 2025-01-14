import { IEventRepository } from "../../repositories/IEventRepository"; 
import { Event } from "../../types/Event";

export class UpdateEventUseCase{
    constructor(private eventRepository:IEventRepository){}

    async execute(id:string,event:any){
        let oldEvent = await this.eventRepository.findById(id) as Event;
        
        let updatedEvent:Event={
            id:oldEvent.id,
            title:event.title || oldEvent.title,
            data:event.data || oldEvent.data,
            endereco:event.endereco || oldEvent.endereco,
            geolocalization:event.geolocalization || oldEvent.geolocalization,
            quantPart:event.quantPart || oldEvent.quantPart,
            description:event.description || oldEvent.description,
            horario:event.horario || oldEvent.horario,
            imagem:event.imagem || oldEvent.imagem,
        }

        await this.eventRepository.updateEvent(id,updatedEvent);

        return updatedEvent;

    }
}