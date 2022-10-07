import { Router } from "express";
import routeSigninSignup from "./signinSignup.routes";
const routers = Router();

routers.use("/api", routeSigninSignup);

export default routers;