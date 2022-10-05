import { Router, Request, Response } from "express";
import routeSigninSignup from "./signinSignup";
const routers = Router();

routers.use("/api", routeSigninSignup);

export default routers;