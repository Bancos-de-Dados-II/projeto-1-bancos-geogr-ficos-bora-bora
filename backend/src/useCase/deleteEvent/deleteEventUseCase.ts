import { IEventRepository } from "../../repositories/IEventRepository"; 

export class DeleteEventUseCase{
    constructor(private eventRepository:IEventRepository){}

    async execute(id:string){
        let eventDeleted = await this.eventRepository.deleteEvent(id);
        
        return "Evento deletado com sucesso!";
    }
}