import { Router, Request, Response } from "express";
import routeUser from "./user";
const routers = Router();

routers.use("/", routeUser);

export default routers;