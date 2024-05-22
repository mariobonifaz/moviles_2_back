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
Object.defineProperty(exports, "__esModule", { value: true });
exports.IngredientesService = void 0;
class IngredientesService {
    constructor(ingredientesRepository) {
        this.ingredientesRepository = ingredientesRepository;
    }
    createIngrediente(ingredientes) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.ingredientesRepository.createIngrediente(ingredientes);
            }
            catch (error) {
                throw new Error(`Error creating Ingredientes: ${error.message}`);
            }
        });
    }
    getAllIngrediente() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.ingredientesRepository.getAllIngrediente();
            }
            catch (error) {
                throw new Error(`Error getting all Ingredientes: ${error.message}`);
            }
        });
    }
    deleteIngredienteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.ingredientesRepository.deleteIngredienteById(id);
            }
            catch (error) {
                throw new Error(`Error deleting Ingredientes: ${error.message}`);
            }
        });
    }
}
exports.IngredientesService = IngredientesService;
