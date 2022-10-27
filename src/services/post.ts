import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

class PostService {
  async createNewPost(req: Request, res: Response) {
    try {
      const { idUser, postTitle, postDescription } = req.body;
      const post = await prisma.post.create({
        data: {
          idUser,
          postTitle,
          postDescription,
        },
      });

      let userReturn = {
        Nome: post.postTitle,
        Email: post.postDescription,
      };

      //return this.signin(req, res);

      return res.status(201).json(userReturn);
    } catch (erro: any) {
      return res.status(400).send(erro.message);
    }
  }

  async getPostByid(req: Request, res: Response) {
    const id = req.params.id;
    const post = await prisma.post.findUnique({
      where: {
        id,
      },
    });

    return res.status(200).json(post);
  }

  async getPosters(req: Request, res: Response) {
    const post = await prisma.post.findMany();
    return res.status(200).json(post);
  }
}

export default new PostService();
