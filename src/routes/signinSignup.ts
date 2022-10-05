import { Router, Request, Response } from "express";
import express from "express";
import { PrismaClient } from "@prisma/client";
import authService from "../services/authService";
import authMiddleware from "../middlewares/authMiddleware";
import userService from "../services/userService";

const routers = Router();
routers.use(express.json());

const prisma = new PrismaClient();


routers.post("/", userService.createUser);

routers.post("/login", authService.authentication );

routers.get("/:id", userService.getUserByid);

//routers.get("/", userService.getUsers);

routers.get("/", authMiddleware, userService.getUsers);

routers.put("/", userService.updateUserData);

routers.delete("/:id", userService.deleteUser);

export default routers;
