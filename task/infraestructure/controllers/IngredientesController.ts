import { Request, Response } from 'express';
import { IngredientesService } from "../../application/services/user-cases/IngredientesServices";

export class IngredienteController {
    constructor(private ingredienteService: IngredientesService){}

    async createIngrediente(req: Request, res: Response) {
        try {
            const ingredientes = await this.ingredienteService.createIngrediente(req.body);
            res.status(201).json(ingredientes);
        } catch (err) {
            if (err instanceof Error) {
                res.status(400).json({error: err.message})
            } else {
                res.status(500).json({ error: "Internal server error" });
            }
        }
    }

    async getAllIngrediente(req: Request, res: Response) {
        try {
            const ingredientes = await this.ingredienteService.getAllIngrediente();
            res.status(200).json(ingredientes);
        } catch (err) {
            if (err instanceof Error) {
                res.status(400).json({error: err.message})
            } else {
                res.status(500).json({ error: "Internal server error" });
            }
        }
    }

    async deleteIngredienteById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            await this.ingredienteService.deleteIngredienteById(id);
            res.status(204).json({});
        } catch (err) {
            if (err instanceof Error) {
                res.status(500).json({ message: err.message });
            }
        }
    }
}