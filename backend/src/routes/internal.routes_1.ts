import { Router } from 'express';
import { authMiddleware } from '@/middleware/auth';
import healthRoutes from '@/api/internal/health/health.routes';

const router = Router();

// All internal routes are protected by the auth middleware
router.use(authMiddleware);

// --- Core Routes ---
router.use('/health', healthRoutes);

// --- Feature-Specific Routes ---
// This is where you will add your feature-specific routes.
// For example:
// import gameRoutes from '@/api/internal/game/game.routes';
// router.use('/game', gameRoutes);

export default router;
