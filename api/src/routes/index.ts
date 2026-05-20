import { Router } from 'express';
import authRoutes from './auth.routes';
import contactsRoutes from './contacts.routes';
import companiesRoutes from './companies.routes';
import dealsRoutes from './deals.routes';
import tasksRoutes from './tasks.routes';
import notesRoutes from './notes.routes';
import leadsRoutes from './leads.routes';
import dashboardRoutes from './dashboard.routes';

const router = Router();
router.use('/auth', authRoutes);
router.use('/contacts', contactsRoutes);
router.use('/companies', companiesRoutes);
router.use('/deals', dealsRoutes);
router.use('/tasks', tasksRoutes);
router.use('/notes', notesRoutes);
router.use('/leads', leadsRoutes);
router.use('/dashboard', dashboardRoutes);

export default router;
