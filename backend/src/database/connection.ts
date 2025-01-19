import {Sequelize} from "sequelize-typescript";
import path from "path";
/* import User from "./model/User"; */
import Event from "./model/Event";

const __dirname= path.resolve();

function sequelizeInit(database:string, username:string,password:string,host:string){
    console.log(__dirname + '/src/models');
    
    return new Sequelize({
        database,
        username,
        password,
        host,
        dialect:'postgres',
        models:[Event]
    })
};

export default sequelizeInit;