import { Router, Request, Response } from "express";
import express from "express";
import { PrismaClient } from "@prisma/client";
import {
  autheticationUser,
  createUser,
  deleteUser,
  getUserData,
  updateUserData,
} from "../services/userAuthService";

const routers = Router();

routers.use(express.json());

const prisma = new PrismaClient();

routers.post("/", async (req: Request, res: Response) => {
  const { userName, userEmail, birthDate, encryptedPassword, imageAdrress } =
    req.body;
  const user = await createUser(
    userName,
    userEmail,
    birthDate,
    encryptedPassword,
    imageAdrress
  );
  res.json(user);
});

routers.post("/login", async (req: Request, res: Response) => {
  const { userEmail, encryptedPassword } = req.body;
  const resposta = await autheticationUser(userEmail, encryptedPassword);
  res.end(resposta);
});

routers.get("/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const user = await getUserData(id);
  res.json(user);
});

routers.get("/", async (req: Request, res: Response) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

routers.put("/", async (req: Request, res: Response) => {
  const { id, userName } = req.body;
  const resposta = await updateUserData(id, userName);
  res.end(resposta);
});

routers.delete("/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const resposta = await deleteUser(id);
  res.end(resposta);
});

export default routers;
