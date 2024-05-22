import { Ingredientes } from "../../doamin/entities/Ingredientes";
import { IngredientesRepository } from "../repositories/IngredientesRepository";
import IngredientesModel from "../../doamin/entities/IngredientesModel";

export class PostgresIngredientesRepository implements IngredientesRepository {
    async createIngrediente(ingredientes: Ingredientes): Promise<Ingredientes> {
        try {
            const newIngrediente = await IngredientesModel.create({
                nombre: ingredientes.nombre,
                cantidad: ingredientes.cantidad
            });
            return newIngrediente;
        } catch (error) {
            throw new Error(`Error creating Ingrediente: ${(error as Error).message}`);
        }
    }

    async getAllIngrediente(): Promise<Ingredientes[]> {
        try {
            const ingredientes = await IngredientesModel.findAll();
            return ingredientes;
        } catch (error) {
            throw new Error(`Error retrieving Ingrediente: ${(error as Error).message}`);
        }
    }

    async deleteIngredienteById(id: string): Promise<void> {
        try {
            const result = await IngredientesModel.destroy({
                where: { id }
            });
            if (result === 0) {
                throw new Error("Ingrediente not found");
            }
        } catch (error) {
            throw new Error(`Error deleting Ingrediente: ${(error as Error).message}`);
        }
    }
}