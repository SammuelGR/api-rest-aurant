import { Router } from "express";
import { SignInClientController } from "./modules/auth/signInClient/SignInClientController";
import { CreateClientController } from "./modules/clients/useCases/createClient/createClientController";

const routes = Router();

const createClientController = new CreateClientController();
const signInClientController = new SignInClientController();

routes.post("/client/", createClientController.create);

routes.post("/auth/sign-in-client/", signInClientController.SignIn);

export { routes };
