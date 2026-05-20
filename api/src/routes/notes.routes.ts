import { Router } from 'express';
import { getNotesController } from '../controllers/notes.controller';

const router = Router();
router.get('/', getNotesController);
export default router;
