import { Ingredientes } from "../../doamin/entities/Ingredientes";

export interface IngredientesRepository {
    createIngrediente(ingredientes: Ingredientes): Promise<Ingredientes>;
    getAllIngrediente(): Promise<Ingredientes[]>;
    deleteIngredienteById(id: string): Promise<void>;
}