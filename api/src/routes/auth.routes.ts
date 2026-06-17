import { Router } from 'express';
import {
  loginController,
  registerController,
  logoutController,
  getMeController,
} from '../controllers/auth.controller';
import { validate } from '../middlewares/validate.middleware';
import { authMiddleware } from '../middlewares/auth.middleware';
import { RegisterSchema, LoginSchema } from '../types';

const router = Router();

router.post('/register', validate(RegisterSchema), registerController);
router.post('/login', validate(LoginSchema), loginController);
router.post('/logout', authMiddleware, logoutController);
router.get('/me', authMiddleware, getMeController);

export default router;
