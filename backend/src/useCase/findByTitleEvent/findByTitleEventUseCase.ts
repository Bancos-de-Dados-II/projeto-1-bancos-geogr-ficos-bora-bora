import { IEventRepository } from "../../repositories/IEventRepository"; 


export class FindByTitleEventUseCase{
    constructor(private eventRepository:IEventRepository){}

    async execute(name:string){

        let event = await this.eventRepository.findByName(name);

        return event;
    }
}