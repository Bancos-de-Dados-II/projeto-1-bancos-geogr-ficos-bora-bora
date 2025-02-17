import { IEventRepository } from "../IEventRepository";
import { Event } from "../../types/Event";
import Evento from "../../database/model/Event";

export class EventRepository implements IEventRepository{

    async findById(id: string): Promise<Event | null> {
        let event = await Evento.findOne({_id:id}) as Event;
        return event;
    }


    async findAll(): Promise<Event[]> {
        let result = await Evento.find();
         let events: Event[] = [];
        
        result.forEach((user:any )=>{
            events.push(user);
        })
        
              
        return events;
    }

    async deleteEvent(id: string): Promise<void> {
       await Evento.deleteOne({_id:id});
       return;
    }

    async createEvent(event: Event): Promise<unknown> {
        
        let newEvent = new Evento(event);
        newEvent.save();
        return newEvent;
    }



    async updateEvent(id: string, event: Event): Promise<unknown> {
        await Evento.updateOne({_id:id},{...event});
        let eventUpdated = await Evento.findOne({_id:id});
        
        return eventUpdated;
    }
}