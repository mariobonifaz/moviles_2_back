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

    async updateIngredientes(ingredientesId: string, IngredientesData: Partial<Ingredientes>): Promise<Ingredientes> {
        try {
            // Primero, obtenemos el producto que queremos actualizar
            const existingIngrediente = await this.ingredientesRepository.findById(ingredientesId);

            // Si el producto no existe, lanzamos un error
            if (!existingIngrediente) {
                throw new Error('Product not found');
            }

            // Actualizamos los campos proporcionados en updatedProductData
            Object.assign(existingIngrediente, IngredientesData);

            // Actualizamos el producto en la base de datos
            const updatedIngrediente = await this.ingredientesRepository.updateIngrediente(existingIngrediente);

            return updatedIngrediente;
        } catch (error) {
            throw new Error(`Error updating product: ${(error as Error).message}`);
        }
    }
}