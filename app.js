"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
require("./Database/Sequelize");
const IngredientesController_1 = require("./task/infraestructure/controllers/IngredientesController");
const PostgresIngredientesRepository_1 = require("./task/infraestructure/repositories/PostgresIngredientesRepository");
const IngredientesServices_1 = require("./task/application/services/user-cases/IngredientesServices");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(body_parser_1.default.json());
const ingredientesRepository = new PostgresIngredientesRepository_1.PostgresIngredientesRepository();
const ingredienteService = new IngredientesServices_1.IngredientesService(ingredientesRepository);
const ingredienteController = new IngredientesController_1.IngredienteController(ingredienteService);
app.post('/api/v1/ingredientes', (req, res) => ingredienteController.createIngrediente(req, res));
app.get('/api/v1/ingredientes', (req, res) => ingredienteController.getAllIngrediente(req, res));
app.delete('/api/v1/:id/ingredientes', (req, res) => ingredienteController.deleteIngredienteById(req, res));
app.put('/api/v2/:id/ingredientes', (req, res) => ingredienteController.updateIngrediente(req, res, ingredienteService));
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
