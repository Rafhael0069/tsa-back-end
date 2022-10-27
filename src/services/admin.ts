import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

class AdminService {

  async createNewAdmin(req: Request, res: Response) {
    try {
      const { adminName, adminEmail, adminPassword } = req.body;
      const passwordHash = bcrypt.hashSync(adminPassword, 8);
      const admin = await prisma.admin.create({
        data: {
          adminName,
          adminEmail,
          adminPassword: passwordHash,
        },
      });

      let userReturn = {
        id: admin.id,
        Nome: admin.adminName,
        Email: admin.adminEmail,
      };

      //return this.signin(req, res);

      return res.status(201).json(userReturn);
    } catch (erro: any) {
      return res.status(400).send(erro.message);
    }
  }
 
  async updateAdminData(req: Request, res: Response) {
    const { id, adminName } = req.body;
    const admin = await prisma.admin.update({
      where: {
        id,
      },
      data: {
        adminName,
      },
    });

    return res.status(201).json(admin);
  }


  async getAdminByid(req: Request, res: Response) {
    const id = req.params.id;
    const admin = await prisma.admin.findUnique({
      where: {
        id,
      },
    });

    return res.status(200).json(admin);
  }
}

export default new AdminService();
