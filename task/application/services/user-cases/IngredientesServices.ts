import { Ingredientes } from "../../../doamin/entities/Ingredientes";
import { IngredientesRepository } from "../../../infraestructure/repositories/IngredientesRepository";

export class IngredientesService {
    constructor(
        private ingredientesRepository: IngredientesRepository
    ){}

    async createIngrediente(ingredientes: Ingredientes): Promise<Ingredientes> {
        try {
            return await this.ingredientesRepository.createIngrediente(ingredientes);
        } catch (error) {
            throw new Error(`Error creating Ingredientes: ${(error as Error).message}`);
        }
    }

    async getAllIngrediente(): Promise<Ingredientes[]> {
        try {
            return await this.ingredientesRepository.getAllIngrediente();
        } catch (error) {
            throw new Error(`Error getting all Ingredientes: ${(error as Error).message}`);
        }
    }

    async deleteIngredienteById(id: string): Promise<void> {
        try {
            await this.ingredientesRepository.deleteIngredienteById(id);
        } catch (error) {
            throw new Error(`Error deleting Ingredientes: ${(error as Error).message}`);
        }
    }
}