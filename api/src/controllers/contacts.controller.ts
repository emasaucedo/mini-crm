import { Request, Response } from 'express';
import { getContacts } from '../services/contacts.service';

export const getContactsController = async (req: Request, res: Response) => {
  const contacts = await getContacts();
  res.json(contacts);
};
