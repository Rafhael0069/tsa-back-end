import { Router } from "express";
import postService from "../services/post";
import authMiddleware from "../middlewares/auth";
const routers = Router();

routers.post("/", postService.createNewPost);

routers.get("/", postService.getPosters);

routers.get("/:id", postService.getPostByid);

export default routers;
