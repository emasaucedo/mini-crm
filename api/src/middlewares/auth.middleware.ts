import { NextFunction, Response } from 'express';
import jwt from 'jsonwebtoken';
import { env } from '../config/env';
import { RequestWithUser } from '../types';

export const authMiddleware = (req: RequestWithUser, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader?.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const payload = jwt.verify(token, env.JWT_SECRET);
    req.user = payload as { id?: number; email?: string };
    next();
  } catch (_error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};
