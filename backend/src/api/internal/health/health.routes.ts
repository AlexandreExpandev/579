import { Router } from 'express';
import * as healthController from './controller';

const router = Router();

/**
 * @api {get} /v1/internal/health Health Check
 * @apiName GetHealth
 * @apiGroup Health
 * @apiVersion 1.0.0
 * @apiDescription Checks the operational status of the internal API.
 * @apiSuccess {Boolean} success Indicates if the request was successful.
 * @apiSuccess {Object} data Health status information.
 * @apiSuccess {String} data.status The operational status.
 * @apiSuccess {String} data.message A descriptive message.
 * @apiSuccess {String} data.timestamp The server timestamp.
 */
router.get('/', healthController.getHealthStatus);

export default router;
