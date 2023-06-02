import { Router } from 'express';

import { ensureAuthenticateClient } from './middlewares/ensureAuthenticateClient';
import { AuthenticateClientController } from './modules/accounts/authenticateClient/AuthenticateClientController';
import { CreateClientController } from './modules/clients/useCases/CreateClient/CreateClientController';
import { CreateDeliveriesController } from './modules/deliveries/useCases/CreateDeliveries/CreateDeliveriesController';
import { FindAllAvailableController } from './modules/deliveries/useCases/FindDeliveries/findAllAvailable/findAllAvailableController';
import { CreateDeliverymanController } from './modules/deliveryman/useCases/CreateDeliveryman/CreateDeliverymanController';
import { AuthenticateDeliverymanController } from './modules/accounts/authenticateDelivery/authenticateDeliverymanController';
import { ensureAuthenticateDeliveryman } from './middlewares/ensureAuthenticateDeliveryman';
import { UpdateDeliverymanController } from './modules/deliveryman/useCases/UpdateDelyveryman/UpdateDeliverymanController';
import { FindAllDeliveriesController } from './modules/clients/useCases/Deliveries/FindAllDeliveries/FindAllDeliveriesController';
import { FindAllDeliveriesDeliverymanController } from './modules/deliveryman/useCases/FindAllDeliveries/FindAllDeliveriesDeliverymanController';

const routes = Router();

const authenticateClientController = new AuthenticateClientController();
const authenticateDeliverymanController = new AuthenticateDeliverymanController();
const createClientController = new CreateClientController();
const createDeliverymanController = new CreateDeliverymanController();
const createDeliveriesController = new CreateDeliveriesController();
const findAllAvailableController = new FindAllAvailableController();
const updateDeliverymanController = new UpdateDeliverymanController();
const findAllDeliveriesController = new FindAllDeliveriesController();
const findAllDeliveriesDeliverymanController = new FindAllDeliveriesDeliverymanController();

routes.post("/client/authenticate", authenticateClientController.handle);
routes.post("/deliveryman/authenticate", authenticateDeliverymanController.handle);

routes.post("/client", createClientController.handle);
routes.post("/deliveryman", createDeliverymanController.handle);

routes.get("/delivery/available", ensureAuthenticateDeliveryman, findAllAvailableController.handle);
routes.get("/client/deliveries", ensureAuthenticateClient, findAllDeliveriesController.handle);
routes.get("/deliveries", ensureAuthenticateClient, findAllDeliveriesController.handle);
routes.get("/deliveryman/deliveries", ensureAuthenticateDeliveryman, findAllDeliveriesDeliverymanController.handle);

routes.post("/delivery", ensureAuthenticateClient, createDeliveriesController.handle);
routes.put("/delivery/updateDeliveryman/:id", ensureAuthenticateDeliveryman , updateDeliverymanController.handle);

export { routes };
