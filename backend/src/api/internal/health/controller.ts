import { Request, Response } from 'express';
import { successResponse } from '@/utils/responseHandler';
import { HttpStatusCode } from '@/constants';

/**
 * @summary Handles health check requests for the internal API.
 * @description Provides a consistent endpoint to verify that the API is running and operational.
 * @param {Request} _req - The Express request object.
 * @param {Response} res - The Express response object.
 */
export const getHealthStatus = (_req: Request, res: Response): void => {
  const healthData = {
    status: 'OK',
    message: 'Internal API is healthy and operational.',
    timestamp: new Date().toISOString(),
  };
  res.status(HttpStatusCode.OK).json(successResponse(healthData));
};
