import { Router } from "express";
import { AuthenticationUserController } from "../modules/accounts/useCases/authentication/AuthenticateUserController";

const authenticationRoute = Router();

const authenticationController = new AuthenticationUserController();

authenticationRoute.get("/", authenticationController.handler);

export { authenticationRoute };