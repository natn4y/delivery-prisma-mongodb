import { Router } from 'express';
import { CreateClientController } from './modules/clients/useCases/createClient/CreateClientController';
import { AuthenticateClientController } from './modules/accounts/authenticateClient/AuthenticateClientController';
import { CreateDeliverymanController } from './modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController';
import { CreateDeliveriesController } from './modules/deliveries//create/useCases/CreateDeliveriesController';
import { ensureAuthenticateClient } from './middlewares/ensureAuthenticateClient';
import { FindAllAvailableController } from '../src/modules/deliveries/findAllAvailable/findAllAvailableController';

const routes = Router();

const authenticateClientController = new AuthenticateClientController();
const createClientController = new CreateClientController();
const createDeliverymanController = new CreateDeliverymanController();
const createDeliveriesController = new CreateDeliveriesController();
const findAllAvailableController = new FindAllAvailableController();

routes.post("/client", createClientController.handle);
routes.post("/authenticate", authenticateClientController.handle);
routes.post("/deliveryman", createDeliverymanController.handle);
routes.get("/delivery/available", findAllAvailableController.handle);
routes.post("/delivery", ensureAuthenticateClient ,createDeliveriesController.handle);

export { routes };