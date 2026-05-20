import { Router } from 'express';
import { getDealsController } from '../controllers/deals.controller';

const router = Router();
router.get('/', getDealsController);
export default router;
