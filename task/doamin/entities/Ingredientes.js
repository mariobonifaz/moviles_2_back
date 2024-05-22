"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ingredientes = void 0;
const sequelize_1 = require("sequelize");
const Sequelize_1 = require("../../../Database/Sequelize");
class Ingredientes extends sequelize_1.Model {
}
exports.Ingredientes = Ingredientes;
Ingredientes.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    cantidad: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize: Sequelize_1.sequelize,
    tableName: 'ingredientes' // Nombre de la tabla en la base de datos
});
