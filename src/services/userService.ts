import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class UserService {
  async createUser(req: Request, res: Response) {
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
  }

  async updateUserData(req: Request, res: Response) {
    const { id, userName } = req.body;
    const user = await prisma.user.update({
      where: {
        id: Number(id),
      },
      data: {
        userName,
      },
    });
    res.json(user);
  }

  async deleteUser(req: Request, res: Response) {
    const id = req.params.id;
    const user = await prisma.user.delete({
      where: {
        id: Number(id),
      },
    });
    res.json(user);
  }

  async getUserByid(req: Request, res: Response) {
    const id = req.params.id;
    const user = await prisma.user.findUnique({
      where: {
        id: Number(id),
      },
    });
    res.json(user);
  }

  async getUsers(req: Request, res: Response) {
    const id = req.params.id;
    const user = await prisma.user.findUnique({
      where: {
        id: Number(id),
      },
    });
    res.json(user);
  }
}

export default new UserService();
