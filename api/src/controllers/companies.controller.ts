import { Request, Response } from 'express';
import { getCompanies } from '../services/companies.service';

export const getCompaniesController = async (req: Request, res: Response) => {
  const companies = await getCompanies();
  res.json(companies);
};
