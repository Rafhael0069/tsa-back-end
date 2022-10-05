import { Router, Request, Response } from "express";
import routeSigninSignup from "./signinSignup";
const routers = Router();

routers.use("/", routeSigninSignup);

export default routers;