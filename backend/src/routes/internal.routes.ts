import { Router } from 'express';
import { authMiddleware } from '@/middleware/auth';

const router = Router();

// All internal routes are protected by the authentication middleware.
router.use(authMiddleware);

/**
 * This is a placeholder for feature-specific routes.
 * For example, to add routes for a 'game' feature:
 * 
 * import gameRoutes from './game.routes';
 * router.use('/game', gameRoutes);
 */

export default router;
