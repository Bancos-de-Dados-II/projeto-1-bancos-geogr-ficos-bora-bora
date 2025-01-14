import { Column, Table, Model, ForeignKey, CreatedAt, DataType, UpdatedAt} from 'sequelize-typescript';

@Table({
    timestamps:true,
    tableName:'events',
    modelName:'Event'
})

class Event extends Model{
    @Column({
        primaryKey:true,
        type:DataType.UUID,
        defaultValue:DataType.UUIDV4
    })
    declare id:string

    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    declare title:string

    @Column({
        type:DataType.STRING,
        allowNull:true
    })
    declare description:string

    @Column({
        type:DataType.INTEGER,
        allowNull:false
    })
    declare quantPart:number

    @Column({
        type:DataType.DATE,
        allowNull:true
    })
    declare data:string

    @Column({
        type:DataType.STRING,
        allowNull:true
    })
    declare imagem:string
    
    @Column({
        type:DataType.TIME,
        allowNull:true
    })
    declare horario:string

    @Column({
        type:DataType.GEOGRAPHY,
        allowNull:false
    })
    declare geolocalization:object

    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    declare endereco:string

    @CreatedAt
    declare createdAt:Date;

    @UpdatedAt
    declare updatedAt: Date;
}

export default Event;