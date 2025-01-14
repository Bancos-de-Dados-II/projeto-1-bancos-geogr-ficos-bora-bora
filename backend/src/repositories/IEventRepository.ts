import { Event } from "../types/Event";


export interface IEventRepository{
    findById(id:string):Promise<Event | null>
    findAll():Promise<Event[]>
    deleteEvent(id:string):Promise<void>
    findByName(name:string):Promise<Event | null>
    createEvent(event:Event):Promise<unknown>
    updateEvent(id:string,event:Event): Promise<unknown>
}

    // findByEmail(email:string):Promise<User | null>
    // findById(id:string):Promise<User>