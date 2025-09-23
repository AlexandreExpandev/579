import { Request, Response, NextFunction } from 'express';
import { AnyZodObject, ZodError } from 'zod';
import { AppError } from '@/utils/AppError';
import { HttpStatusCode } from '@/constants';

/**
 * @summary
 * Middleware factory to validate incoming request data against a Zod schema.
 * It checks req.body, req.query, and req.params.
 *
 * @param schema The Zod schema to validate against.
 * @returns An Express middleware function.
 */
export const validateRequest = (
  schema: AnyZodObject,
) => {
  return async (req: Request, _res: Response, next: NextFunction): Promise<void> => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        return next(new AppError('Validation failed', HttpStatusCode.BAD_REQUEST, 'VALIDATION_ERROR', error.flatten().fieldErrors));
      }
      next(new AppError('An unexpected error occurred during validation', HttpStatusCode.INTERNAL_SERVER_ERROR));
    }
  };
};
