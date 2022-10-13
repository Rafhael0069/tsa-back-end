import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class UserService {
 
  async updateUserData(req: Request, res: Response) {
    const { id, userName } = req.body;
    const user = await prisma.user.update({
      where: {
        id,
      },
      data: {
        userName,
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
