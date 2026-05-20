import { Router } from 'express';
import { getLeadsController } from '../controllers/leads.controller';

const router = Router();
router.get('/', getLeadsController);
export default router;
