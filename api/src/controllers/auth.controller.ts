import { Request, Response } from 'express';
import { login, register, logout, getMe, isTokenBlacklisted } from '../services/auth.service';
import { RequestWithUser } from '../types';

export const loginController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const result = await login(email, password);
    return res.json(result);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Login failed';
    return res.status(401).json({ error: message });
  }
};

export const registerController = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const result = await register(name, email, password);
    return res.status(201).json(result);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Registration failed';
    return res.status(400).json({ error: message });
  }
};

export const logoutController = async (req: RequestWithUser, res: Response) => {
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader?.split(' ')[1];

    if (!token) {
      return res.status(400).json({ error: 'No token provided' });
    }

    const result = logout(token);
    return res.json(result);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Logout failed';
    return res.status(400).json({ error: message });
  }
};

export const getMeController = async (req: RequestWithUser, res: Response) => {
  try {
    if (!req.user || !req.user.id) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const result = await getMe(req.user.id);
    return res.json(result);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to get user';
    return res.status(400).json({ error: message });
  }
};
