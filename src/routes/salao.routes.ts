import { Router } from 'express';
import { CreateSalaoController } from '../modules/salao/useCases/CreateSalao/CreateSalaoController';

const salaoRoutes = Router();
const createSalaoController = new CreateSalaoController();

salaoRoutes.post("/create", createSalaoController.handle);

export default salaoRoutes;
