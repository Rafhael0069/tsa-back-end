import { Router } from "express";
import express from "express";
import authService from "../services/auth";
import cors from "cors";
const routers = Router();

routers.use(express.json());
routers.use(cors());

routers.post("/signup", authService.signup);

routers.post("/signin", authService.signin);


export default routers;
