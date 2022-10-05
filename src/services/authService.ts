/* import { User } from './../repositories/base/ModelTypes';
import UserRepository from '../repositories/UserRepository'; */
import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";

//import dotenv from "dotenv";
//dotenv.config();

const prisma = new PrismaClient();
const tokemSecret = process.env.SECRET!;
//const userRepository = new UserRepository();

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
        //console.log(user);
        //const token = jwt.sing(user.id, SECRET, { expireIn: 300 });
        const token = jwt.sign({ id: user.id }, tokemSecret, {
          expiresIn: "1d",
        });

        //delete user.encryptedPassword;
        
        return res.json({user, token});
      } else {
        return res.end("Senha inválida.");
      }
    } else {
      return res.end("Usuário não encontrado. --env: ");
    }
  }
}

export default new AuthService();
