import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import users from "./users";

const prisma = new PrismaClient();

class RequisitionService {
  async createNewRequisition(req: Request, res: Response) {
    try {
      const { idUser } = req.body;
      const requisition = await prisma.requisition.create({
        data: {
          idUser,
        },
      });

      let userReturn = {
        id: requisition.id,
      };

      //return this.signin(req, res);

      return res.status(201).json(userReturn);
    } catch (erro: any) {
      return res.status(400).send(erro.message);
    }
  }

  async updateRequisitionData(req: Request, res: Response) {
    const { id, status } = req.body;
    const requisition = await prisma.requisition.update({
      where: {
        id,
      },
      data: {
        status,
        read: true,
      },
    });
    if (status === true) {
        users.verifedUser(req, res);
    }

    return res.status(201).json(requisition);
  }

  async getRequisitionByid(req: Request, res: Response) {
    const id = req.params.id;
    const requisition = await prisma.requisition.findUnique({
      where: {
        id,
      },
    });

    return res.status(200).json(requisition);
  }

  async getRequisitions(req: Request, res: Response) {
    const requisition = await prisma.requisition.findMany();
    return res.status(200).json(requisition);
  }
}

export default new RequisitionService();
