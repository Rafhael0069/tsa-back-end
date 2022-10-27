import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class UserService {
  async verifedUser(req: Request, res: Response) {
    const { idUser } = req.body;
    const user = await prisma.user.update({
      where: {
        idUser,
      },
      data: {
        verified: true,
        level: 2,
      },
    });

    return res.status(201).json(user);
  }

  async deleteUser(req: Request, res: Response) {
    const id = req.params.id;
    const user = await prisma.user.delete({
      where: {
        id,
      },
    });
    return res.json(user);
  }

  async getUserByid(req: Request, res: Response) {
    const id = req.params.id;
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    return res.status(200).json(user);
  }

  async getUsers(req: Request, res: Response) {
    const user = await prisma.user.findMany();
    return res.status(200).json(user);
  }
}

export default new UserService();
