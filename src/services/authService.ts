import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";

const SECRET = "rafhaelgaspar";

const prisma = new PrismaClient();

async function autheticationUser(userEmail: string, encryptedPassword: string) {
  const user = await prisma.user.findUnique({
    where: {
      userEmail: userEmail,
    },
  });
  if (user != null) {
    if (user.encryptedPassword === encryptedPassword) {
      //console.log(user);
      //const token = jwt.sing(user.id, SECRET, { expireIn: 300 });
      const token = jwt.sign({ id: user.id }, SECRET, { expiresIn: "1d" });
      return token;
    } else {
      return "Senha inválida.";
    }
  } else {
    return "Usuário não encontrado.";
  }
}

export { autheticationUser };
