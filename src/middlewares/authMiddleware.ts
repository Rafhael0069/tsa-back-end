import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

class AuthMiddleware {
  accessAuth(req: Request, res: Response, next: NextFunction) {
    const token = req.headers["authorization"]?.split("Bearer ")[1];

    if (!token) return res.sendStatus(401);
    try {
      const id = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET!);
      next();
    } catch (error) {
      return res.sendStatus(401);
    }
  }

  createAccessToken = (userId: number) => {
    return jwt.sign({ id: userId }, process.env.ACCESS_TOKEN_SECRET!, {
      expiresIn: `${process.env.ACCESS_TOKEN_DURATION_MINUTES}m`,
    });
  };
}

export default new AuthMiddleware();