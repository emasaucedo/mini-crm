import { Request, Response } from "express";
import { getDeals } from "../services/deals.service";

export const getDealsController = async (req: Request, res: Response) => {
  const deals = await getDeals();
  res.json(deals);
};
