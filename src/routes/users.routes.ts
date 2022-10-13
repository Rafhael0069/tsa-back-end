import { Router } from "express";
import express from "express";
import userService from "../services/users";
import authMiddleware from "../middlewares/auth";
import cors from "cors";
const routers = Router();

routers.use(express.json());
routers.use(cors());

routers.get("/:id", authMiddleware.accessAuth, userService.getUserByid);

routers.get("/users", authMiddleware.accessAuth, userService.getUsers);

routers.put("/", authMiddleware.accessAuth, userService.updateUserData);

export default routers;
