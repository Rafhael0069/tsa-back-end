import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

class AuthService{
  async authentication(req: Request, res: Response) {
    const { userEmail, encryptedPassword } = req.body;
    const user = await prisma.user.findUnique({
      where: {
        userEmail: userEmail,
      },
    });
    if (user != null) {
      if (user.encryptedPassword === encryptedPassword) {
        //console.log(user);
        //const token = jwt.sing(user.id, SECRET, { expireIn: 300 });
        const token = jwt.sign({ id: user.id }, "teste", { expiresIn: "1d" });
        return token;
      } else {
        res.end("Senha inválida.");
      }
    } else {
      res.end("Usuário não encontrado.");
    }
  }
}

export default new AuthService; 
