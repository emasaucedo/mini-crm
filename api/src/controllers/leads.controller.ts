import { Request, Response } from "express";
import { getLeads } from "../services/leads.service";

export const getLeadsController = async (req: Request, res: Response) => {
  const leads = await getLeads();
  res.json(leads);
};
