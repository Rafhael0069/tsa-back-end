import { PrismaClient } from "@prisma/client";

const SECRET = "rafhaelgaspar";

const prisma = new PrismaClient();

async function createUser(
  userName: string,
  userEmail: string,
  birthDate: string,
  encryptedPassword: string,
  imageAdrress: string
) {
  const user = await prisma.user.create({
    data: {
      userName,
      userEmail,
      birthDate,
      encryptedPassword,
      imageAdrress,
    },
  });
  return user;
}

async function updateUserData(id: string, userName: string) {
  const updadeUser = await prisma.user.update({
    where: {
      id: Number(id),
    },
    data: {
      userName,
    },
  });
  return "dados alterados com sucesso.";
}

async function deleteUser(id: string) {
  const deleteUser = await prisma.user.delete({
    where: {
      id: Number(id),
    },
  });
  return "usuario deletado com sucesso.";
}

async function getUserData(id: string) {
  const user = await prisma.user.findUnique({
    where: {
      id: Number(id),
    },
  });
  return user;
}

export {
  createUser,
  getUserData,
  updateUserData,
  deleteUser,
};
