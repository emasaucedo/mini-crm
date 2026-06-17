import { NextFunction, Response } from 'express';
import jwt from 'jsonwebtoken';
import { env } from '../config/env';
import { RequestWithUser } from '../types';
import { isTokenBlacklisted } from '../services/auth.service';

export const authMiddleware = (req: RequestWithUser, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader?.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Missing or invalid authorization header' });
  }

  const token = authHeader.split(' ')[1];

  // Check if token is blacklisted
  if (isTokenBlacklisted(token)) {
    return res.status(401).json({ error: 'Token has been invalidated' });
  }

  try {
    const payload = jwt.verify(token, env.JWT_SECRET) as {
      id: number;
      email: string;
      name: string;
    };
    req.user = payload;
    next();
  } catch (_error) {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }
};
