import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import config from "../config/production"

class AuthMiddleware {
  accessAuth(req: Request, res: Response, next: NextFunction) {
    const token = req.headers["authorization"]?.split("Bearer ")[1];

    if (!token) return res.sendStatus(401);
    try {
      const id = jwt.verify(token, config.JWT_SECRET);
      next();
    } catch (erro) {
      return res.status(401).send(erro.message);
    }
  }

  createAccessToken = (userId: number) => {
    return jwt.sign({ id: userId }, config.JWT_SECRET, {
      expiresIn: `${config.TOKEN_DURATION}m`,
    });
  };
}

export default new AuthMiddleware();