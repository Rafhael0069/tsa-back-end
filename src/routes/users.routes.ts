import { Router } from "express";
import userService from "../services/users";
import authMiddleware from "../middlewares/auth";
const routers = Router();

/* routers.get("/:id", authMiddleware.accessAuth, userService.getUserByid);

routers.get("/users", authMiddleware.accessAuth, userService.getUsers); */

routers.get("/:id", userService.getUserByid);

routers.get("/users", userService.getUsers);


export default routers;
