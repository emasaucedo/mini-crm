import { Request, Response } from 'express';
import { getNotes } from '../services/notes.service';

export const getNotesController = async (req: Request, res: Response) => {
  const notes = await getNotes();
  res.json(notes);
};
