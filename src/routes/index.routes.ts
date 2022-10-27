import { Router } from "express";
import authRoutes from "./auth.routes";
import usersRoutes from "./users.routes";
import adminRoutes from "./admin.routes";
import requisitionsRoutes from "./requisition.routes";
import postsRoutes from "./post.routes";
const routers = Router();

routers.use("/auth", authRoutes);
routers.use("/users", usersRoutes);
routers.use("/admin", adminRoutes);
routers.use("/requisitions", requisitionsRoutes);
routers.use("/posts", postsRoutes);

export default routers;
