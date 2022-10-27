import { Router } from "express";
import adminService from "../services/admin";
const routers = Router();

routers.post("/", adminService.createNewAdmin);

routers.post("/:id", adminService.getAdminByid);


export default routers;
