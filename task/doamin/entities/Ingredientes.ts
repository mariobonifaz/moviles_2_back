import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../../../Database/Sequelize';

export class Ingredientes extends Model {
    public id!: number;
    public nombre!: string;
    public cantidad!:number;
}

Ingredientes.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'ingredientes' // Nombre de la tabla en la base de datos
});