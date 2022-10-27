import { Router } from "express";
import requisitionService from "../services/requisition";
const routers = Router();

routers.post("/", requisitionService.createNewRequisition);

routers.get("/:id", requisitionService.getRequisitionByid);

routers.get("/", requisitionService.getRequisitions);

routers.put("/:id", requisitionService.updateRequisitionData);

export default routers;
