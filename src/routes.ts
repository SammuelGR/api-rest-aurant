import { Router } from "express";

import { SignInClientController } from "./modules/auth/signInClient/SignInClientController";
import { CreateClientController } from "./modules/clients/useCases/createClient/createClientController";
import { CreateDeliveryManController } from "./modules/deliverymen/useCases/createDeliveryman/createDeliveryManController";

const routes = Router();

const createClientController = new CreateClientController();
const signInClientController = new SignInClientController();

const createDeliverymanController = new CreateDeliveryManController();

routes.post("/client/", createClientController.create);

routes.post("/auth/sign-in-client/", signInClientController.SignIn);

routes.post("/deliveryman/", createDeliverymanController.create);

export { routes };
