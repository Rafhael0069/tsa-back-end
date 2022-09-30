import express from "express";
import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { Prisma } from ".prisma/client";

const app = express();
app.use(express.json());

const prisma = new PrismaClient();

app.post("/", async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user = await prisma.user.create({
    data: {
      username: username,
      password: password,
    },
  });
  res.json(user);
});

app.get("/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const user = await prisma.user.findUnique({
    where: {
      id: Number(id),
    },
  });
  res.json(user);
});

app.get("/", async (req: Request, res: Response) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

app.put("/", async (req: Request, res: Response) => {
  const { id, username } = req.body;
  const updadeUser = await prisma.user.update({
    where: {
      id: id,
    },
    data: {
      username: username,
    },
  });
  res.json(updadeUser);
});

app.delete("/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const deleteUser = await prisma.user.delete({
    where: {
      id: Number(id),
    },
  });
  res.json(deleteUser);
});

app.listen(3000, () => {
  console.log("server runing in port:3000");
});
