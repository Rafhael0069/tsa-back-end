import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import authMiddleware from "../middlewares/auth";
import bcrypt from "bcrypt";

//import { User } from "./User";

const prisma = new PrismaClient();

class AuthService {
  async signinn(req: Request, res: Response) {
    const { userEmail, password } = req.body;
    const user = await prisma.user.findUnique({
      where: {
        userEmail: userEmail,
      },
    });
    if (user != null) {
      if (user.userPassword === password) {
        const token = authMiddleware.createAccessToken(user.id);

        let userReturn = {
          id: user.id,
          Nome: user.userName,
          Email: user.userEmail,
        };

        return res.json({ userReturn, token });
      } else {
        //res.statusCode = 205;
        //res.statusMessage = "Senha inválida.";
        return res.status(205).send("Senha inválida.");
      }
    } else {
      //res.statusMessage = "Usuário não encontrado.";
      return res.status(204).send("Usuário não encontrado.");
    }
  }

  async signin(req: Request, res: Response) {
    try {
      const { userEmail, userPassword } = req.body;
      const user = await prisma.user.findUnique({
        where: {
          userEmail: userEmail,
        },
      });

      if (user === null) {
        throw new Error("E-mail ou senha inválidos!");
      }

      const passwordIsValid = bcrypt.compareSync(userPassword, user.userPassword);
      if (!passwordIsValid) {
        throw new Error("E-mail ou senha inválidos!");
      }

      const token = authMiddleware.createAccessToken(user.id);

        let userReturn = {
          id: user.id,
          Nome: user.userName,
          Email: user.userEmail,
        };

        return res.json({ userReturn, token });
    } catch (erro: any) {
      res.status(401).send(erro.message);
    }
  }

  async signup(req: Request, res: Response) {
    try {
      const { userName, userEmail, birthDate, userPassword } = req.body;
      const passwordHash = bcrypt.hashSync(userPassword, 8);
      const user = await prisma.user.create({
        data: {
          userName,
          userEmail,
          birthDate,
          userPassword: passwordHash,
        },
      });

      let userReturn = {
        id: user.id,
        Nome: user.userName,
        Email: user.userEmail,
      };


      return res.status(201).json(userReturn);
    } catch (erro: any) {
      return res.status(400).send(erro.message);
    }
  }
}

export default new AuthService();
