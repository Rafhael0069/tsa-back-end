import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import authMiddleware from "../middlewares/authMiddleware";

const prisma = new PrismaClient();
const tokemSecret = process.env.ACCESS_TOKEN_SECRET!;

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

        //delete user.encryptedPassword;
        
        return res.json({user, token});
      } else {
        return res.end("Senha inválida.");
      }
    } else {
      return res.end("Usuário não encontrado.");
    }
  }
}

export default new AuthService();