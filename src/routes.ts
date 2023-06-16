// import { Router } from 'express';
// import { AuthenticateClientController } from './modules/accounts/authenticateClient/AuthenticateClientController';
// import { AuthenticateDeliverymanController } from './modules/accounts/trash/authenticateDelivery/authenticateDeliverymanController';
// import { CreateClientController } from './modules/clients/useCases/CreateClient/CreateClientController';
// import { FindAllDeliveriesController } from './modules/clients/useCases/trash/Deliveries/FindAllDeliveries/FindAllDeliveriesController';
// import { CreateDeliveriesController } from './modules/trash/deliveries/useCases/CreateDeliveries/CreateDeliveriesController';
// import { FindAllAvailableController } from './modules/trash/deliveries/useCases/FindDeliveries/FindAllAvailable/FindAllAvailableController';
// import { UpdateEndDateController } from './modules/trash/deliveries/useCases/UpdateEndDate/UpdateEndDateController';
// import { CreateDeliverymanController } from './modules/trash/deliveryman/useCases/CreateDeliveryman/CreateDeliverymanController';
// import { FindAllDeliveriesDeliverymanController } from './modules/trash/deliveryman/useCases/FindAllDeliveries/FindAllDeliveriesDeliverymanController';
// import { UpdateDeliverymanController } from './modules/trash/deliveryman/useCases/UpdateDelyveryman/UpdateDeliverymanController';


// const routes = Router();

// const authenticateClientController = new AuthenticateClientController();
// const authenticateDeliverymanController = new AuthenticateDeliverymanController();
// const createClientController = new CreateClientController();
// const createDeliverymanController = new CreateDeliverymanController();
// const createDeliveriesController = new CreateDeliveriesController();
// const findAllAvailableController = new FindAllAvailableController();
// const updateDeliverymanController = new UpdateDeliverymanController();
// const findAllDeliveriesController = new FindAllDeliveriesController();
// const findAllDeliveriesDeliverymanController = new FindAllDeliveriesDeliverymanController();
// const updateEndDateController = new UpdateEndDateController();

// routes.post("/client/authenticate", authenticateClientController.handle);
// routes.post("/client", createClientController.handle);

// //routes.post("/deliveryman/authenticate", authenticateDeliverymanController.handle);

// //routes.post("/deliveryman", createDeliverymanController.handle);

// // routes.get("/delivery/available", ensureAuthenticateDeliveryman, findAllAvailableController.handle);
// // routes.get("/client/deliveries", ensureAuthenticateClient, findAllDeliveriesController.handle);
// // routes.get("/deliveries", ensureAuthenticateClient, findAllDeliveriesController.handle);
// // routes.get("/deliveryman/deliveries", ensureAuthenticateDeliveryman, findAllDeliveriesDeliverymanController.handle);

// // routes.post("/delivery", ensureAuthenticateClient, createDeliveriesController.handle);

// // routes.put("/delivery/updateEndDate/:id/", ensureAuthenticateDeliveryman , updateEndDateController.handle);
// // routes.put("/delivery/updateDeliveryman/:id/", ensureAuthenticateDeliveryman , updateDeliverymanController.handle);

// export { routes };
