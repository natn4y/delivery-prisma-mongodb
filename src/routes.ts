import { Router } from 'express';
import { ensureAuthenticateClient } from './middlewares/ensureAuthenticateClient';
import { AuthenticateClientController } from './modules/accounts/authenticateClient/AuthenticateClientController';
import { CreateClientController } from './modules/clients/useCases/CreateClient/CreateClientController';
import { CreateDeliveriesController } from './modules/deliveries/useCases/CreateDeliveries/CreateDeliveriesController';
import { FindAllAvailableController } from './modules/deliveries/useCases/FindDeliveries/findAllAvailable/findAllAvailableController';
import { CreateDeliverymanController } from './modules/deliveryman/useCases/CreateDeliveryman/CreateDeliverymanController';
import { AuthenticateDeliverymanController } from 'modules/accounts/authenticateDelivery/authenticateDeliverymanController';

const routes = Router();

const authenticateClientController = new AuthenticateClientController();
const createClientController = new CreateClientController();
const createDeliverymanController = new CreateDeliverymanController();
const createDeliveriesController = new CreateDeliveriesController();
const findAllAvailableController = new FindAllAvailableController();
const authenticateDeliverymanController = new AuthenticateDeliverymanController();

routes.post("/client/authenticate", authenticateClientController.handle);
routes.post("/deliveryman/authenticate", authenticateDeliverymanController.handle);

routes.post("/client", createClientController.handle);
routes.post("/deliveryman", createDeliverymanController.handle);

routes.post("/delivery", ensureAuthenticateClient ,createDeliveriesController.handle);
routes.get("/delivery/available", findAllAvailableController.handle);

export { routes };
