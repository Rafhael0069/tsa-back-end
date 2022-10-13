import { Router } from "express";
import authRoutes from "./auth.routes";
import usersRoutes from "./users.routes";
const routers = Router();

routers.use("/auth", authRoutes);
routers.use("/users", usersRoutes);

export default routers;