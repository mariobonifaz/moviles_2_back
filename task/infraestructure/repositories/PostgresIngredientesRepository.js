"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostgresIngredientesRepository = void 0;
const IngredientesModel_1 = __importDefault(require("../../doamin/entities/IngredientesModel"));
class PostgresIngredientesRepository {
    createIngrediente(ingredientes) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newIngrediente = yield IngredientesModel_1.default.create({
                    nombre: ingredientes.nombre,
                    cantidad: ingredientes.cantidad
                });
                return newIngrediente;
            }
            catch (error) {
                throw new Error(`Error creating Ingrediente: ${error.message}`);
            }
        });
    }
    getAllIngrediente() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const ingredientes = yield IngredientesModel_1.default.findAll();
                return ingredientes;
            }
            catch (error) {
                throw new Error(`Error retrieving Ingrediente: ${error.message}`);
            }
        });
    }
    deleteIngredienteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield IngredientesModel_1.default.destroy({
                    where: { id }
                });
                if (result === 0) {
                    throw new Error("Ingrediente not found");
                }
            }
            catch (error) {
                throw new Error(`Error deleting Ingrediente: ${error.message}`);
            }
        });
    }
    updateIngrediente(ingredientes) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield IngredientesModel_1.default.update({
                    nombre: ingredientes.nombre,
                    cantidad: ingredientes.cantidad
                }, {
                    where: { id: ingredientes.id }
                });
                return ingredientes;
            }
            catch (error) {
                throw new Error(`Error updating product: ${error.message}`);
            }
        });
    }
    findById(ingredientesId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const ingrediente = yield IngredientesModel_1.default.findByPk(ingredientesId);
                return ingrediente ? ingrediente.toJSON() : null;
            }
            catch (error) {
                throw new Error(`Error finding ingredientes: ${error.message}`);
            }
        });
    }
}
exports.PostgresIngredientesRepository = PostgresIngredientesRepository;
