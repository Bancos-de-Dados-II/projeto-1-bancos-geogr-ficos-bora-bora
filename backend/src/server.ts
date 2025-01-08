import app from "./app";
import sequelizeInit from "./database/connection";
import dotenv from 'dotenv';
dotenv.config();


const sequelize = sequelizeInit(
    process.env.POSTGRES_DB as string,
    process.env.POSTGRES_USER as string,
    process.env.POSTGRES_PASSWORD as string,
    process.env.POSTGRES_HOST as string
);

try {
    await sequelize.authenticate();
    await sequelize.sync();

    app.listen(3000,()=>{
        console.table({
            port:3000,
            URL:"https://localhost:3000"
        })
    })

} catch (error) {
    console.log('Erro ao tentar conectar o banco ou aplicação', error);
}