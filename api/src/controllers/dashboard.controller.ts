import { Request, Response } from 'express';

export const getDashboardController = async (req: Request, res: Response) => {
  res.json({ summary: 'Dashboard data placeholder' });
};
