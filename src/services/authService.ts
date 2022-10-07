import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import authMiddleware from "../middlewares/auth";

//import { User } from "./User";

const prisma = new PrismaClient();

class AuthService {
  async authentication(req: Request, res: Response) {
    const { userEmail, encryptedPassword } = req.body;
    const user = await prisma.user.findUnique({
      where: {
        userEmail: userEmail,
      },
    });
    if (user != null) {
      if (user.encryptedPassword === encryptedPassword) {

        const token = authMiddleware.createAccessToken(user.id ); 

        let userReturn = {
          Nome: user.userName,
          Email: user.userEmail
        }
        
        return res.json({userReturn, token});
      } else {
        return res.end("Senha inválida.");
      }
    } else {
      return res.end("Usuário não encontrado.");
    }
  }
}

export default new AuthService();