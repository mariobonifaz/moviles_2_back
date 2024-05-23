import express from 'express';
import bodyParser from 'body-parser';
import './Database/Sequelize';

import { IngredienteController } from "./task/infraestructure/controllers/IngredientesController";
import { PostgresIngredientesRepository } from "./task/infraestructure/repositories/PostgresIngredientesRepository";
import { IngredientesService } from "./task/application/services/user-cases/IngredientesServices";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

const ingredientesRepository = new PostgresIngredientesRepository();
const ingredienteService = new IngredientesService(ingredientesRepository);
const ingredienteController = new IngredienteController(ingredienteService);

app.post('/api/v1/ingredientes', (req, res) => ingredienteController.createIngrediente(req, res));
app.get('/api/v1/ingredientes', (req, res) => ingredienteController.getAllIngrediente(req, res));
app.delete('/api/v1/:id/ingredientes', (req, res) => ingredienteController.deleteIngredienteById(req, res));
app.put('/api/v2/:id/ingredientes',  (req,res) => ingredienteController.updateIngrediente(req, res, ingredienteService));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});