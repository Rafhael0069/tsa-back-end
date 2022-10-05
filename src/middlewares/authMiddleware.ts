import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface TokemPayload {
  id: String;
  iat: Number;
  exp: Number;
}

export default function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.sendStatus(401);
  } else {
    const tokem = authorization.replace("Bearer", "").trim();
    try {
      const data = jwt.verify(tokem, process.env.SECRET!);
      //const { id } = data as unknown as TokemPayload;
      //req.userId = id;
      //console.log(id);
      return next();
    } catch {
      return res.sendStatus(401);
    }
  }
}
