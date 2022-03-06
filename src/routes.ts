import { Router } from "express";
import { CreateClientController } from "./modules/clients/useCases/createClient/createClientController";

const routes = Router();

const createClientController = new CreateClientController();

routes.post("/client/", createClientController.create);

export { routes };
