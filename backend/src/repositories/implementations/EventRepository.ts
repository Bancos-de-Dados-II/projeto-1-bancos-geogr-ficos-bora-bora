import { IEventRepository } from "../IEventRepository";
import { Event } from "../../types/Event";
import EventModel from "../../database/model/Event";

export class EventRepository implements IEventRepository{
    async findById(id: string): Promise<Event | null> {
        let event = await EventModel.findOne({
            where:{
                id
            }
        });

        return event;
    }

    async findAll(): Promise<Event[]> {
        let result = await EventModel.findAll();
         let events: Event[] = [];
        
        result.forEach((user:any )=>{
            events.push(user);
        })
        
              
        return events;
    }

    async deleteEvent(id: string): Promise<void> {
        let event = await EventModel.destroy({
            where:{
                id
            }
        })
    }

    async findByName(name: string): Promise<Event | null> {
        let event =  await EventModel.findOne({
            where:{
                name
            }
        })

        return event;
    }
    async createEvent(event: Event): Promise<unknown> {
        
        let newEvent = await EventModel.create({...event});
        return newEvent;
    }

    async updateEvent(id: string, event: Event): Promise<unknown> {
        let updatedEvent = await EventModel.update({...event},{
                where:{
                    id
                }
        });

        return updatedEvent;
    }
}