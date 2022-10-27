import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import authMiddleware from "../middlewares/auth";
import bcrypt from "bcrypt";

//import { User } from "./User";

const prisma = new PrismaClient();

class AuthService {
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

      const passwordIsValid = bcrypt.compareSync(
        userPassword,
        user.userPassword
      );
      if (!passwordIsValid) {
        throw new Error("E-mail ou senha inválidos!");
      }

      const token = authMiddleware.createAccessToken(user.id);

      const userReturn = {
        id: user.id,
        Nome: user.userFirstName,
        Email: user.userEmail,
      };

      return res.json({ userReturn, token });
    } catch (erro: any) {
      return res.status(401).send(erro.message);
    }
  }

  async signup(req: Request, res: Response) {
    try {
      const { userFirstName,userLastName, userEmail, birthDate, userPassword } = req.body;
      const passwordHash = bcrypt.hashSync(userPassword, 8);
      const user = await prisma.user.create({
        data: {
          userFirstName,
          userLastName,
          userEmail,
          birthDate,
          userPassword: passwordHash,
        },
      });

      let userReturn = {
        id: user.id,
        Nome: user.userFirstName,
        Sobrenome: user.userLastName,
        Email: user.userEmail,
      };

      return this.signin(req, res);

      //return res.status(201).json(userReturn);
    } catch (erro: any) {
      return res.status(400).send(erro.message);
    }
  }
}

export default new AuthService();
