import { Request, Response } from "express";
import { login, register } from "../services/auth.service";

export const loginController = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const result = await login(email, password);
  return res.json(result);
};

export const registerController = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  const result = await register(name, email, password);
  return res.status(201).json(result);
};
