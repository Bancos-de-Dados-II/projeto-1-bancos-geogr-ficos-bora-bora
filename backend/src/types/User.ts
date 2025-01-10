import {uuid} from "uuidv4";

export class User{
    public readonly id!: string
    public name!: string
    public email!: string 
    public password!: string
    public cpf?: string
    public foto?: string
    public telefone?: string
    public idade?: number
    public organizador?: boolean

    
    constructor(props: Omit<User,"id">, id?:string){
        Object.assign(this,props);
        if(id){
            this.id=uuid();
        }
    }
}