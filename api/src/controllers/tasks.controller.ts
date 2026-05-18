import { Request, Response } from "express";
import { getTasks } from "../services/tasks.service";

export const getTasksController = async (req: Request, res: Response) => {
  const tasks = await getTasks();
  res.json(tasks);
};
