import { Router } from "express";
import { getTasksController } from "../controllers/tasks.controller";

const router = Router();
router.get("/", getTasksController);
export default router;
