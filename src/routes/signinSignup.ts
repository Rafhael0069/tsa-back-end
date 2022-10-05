import { Router } from "express";
import express from "express";
import authService from "../services/authService";
import userService from "../services/userService";
import authMiddleware from "../middlewares/authMiddleware";

const routers = Router();
routers.use(express.json());

routers.post("/", userService.createUser);

routers.post("/auth", authService.authentication );

routers.get("/:id", authMiddleware.accessAuth, userService.getUserByid);

routers.get("/", authMiddleware.accessAuth, userService.getUsers);

routers.put("/", authMiddleware.accessAuth, userService.updateUserData);

routers.delete("/:id", authMiddleware.accessAuth, userService.deleteUser);

export default routers;
