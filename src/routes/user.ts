import { Router, Request, Response } from "express";
import express from "express";
import { PrismaClient } from "@prisma/client";

const routers = Router();

routers.use(express.json());

const prisma = new PrismaClient();

routers.post("/", async (req: Request, res: Response) => {
  const { userName, userEmail, birthDate, encryptedPassword, imageAdrress } =
    req.body;
  const user = await prisma.user.create({
    data: {
      userName,
      userEmail,
      birthDate,
      encryptedPassword,
      imageAdrress,
    },
  });
  res.json(user);
});

routers.post("/login", async (req: Request, res: Response) => {
  const { userEmail, encryptedPassword } = req.body;
  const user = await prisma.user.findUnique({
    where: {
      userEmail: userEmail,
    },
  });
  if (user != null) {
    if (user.encryptedPassword === encryptedPassword) {
      res.json(user);
    } else {
      res.end("senha invalida");
    }
  } else {
    res.end("Email nao encontrado");
  }
});

routers.get("/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const user = await prisma.user.findUnique({
    where: {
      id: Number(id),
    },
  });
  res.json(user);
});

routers.get("/", async (req: Request, res: Response) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

routers.put("/", async (req: Request, res: Response) => {
  const { id, userName } = req.body;
  const updadeUser = await prisma.user.update({
    where: {
      id: id,
    },
    data: {
      userName,
    },
  });
  res.json(updadeUser);
});

routers.delete("/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const deleteUser = await prisma.user.delete({
    where: {
      id: Number(id),
    },
  });
  res.json(deleteUser);
});

export default routers;
