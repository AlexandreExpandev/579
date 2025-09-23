import { z } from 'zod';

/**
 * @summary
 * A collection of common Zod validation schemas to be reused across the application,
 * ensuring consistency in data validation.
 */

// A positive integer ID, often from a database. Coerced from string for path/query params.
export const zId = z.coerce.number().int().positive({ message: 'ID must be a positive integer.' });

// A generic name string, non-empty with min/max length.
export const zName = z.string().trim().min(2, 'Name must be at least 2 characters long.').max(100, 'Name must be 100 characters or less.');

// A standard email validation.
export const zEmail = z.string().email({ message: 'Invalid email address.' });

// A password schema with complexity requirements.
export const zPassword = z
  .string()
  .min(8, 'Password must be at least 8 characters long.')
  .max(100, 'Password must be 100 characters or less.');

// Optional description text.
export const zNullableDescription = z
  .string()
  .trim()
  .max(500, 'Description must be 500 characters or less.')
  .nullable()
  .optional();

// Pagination query parameters.
export const zPaginationQuery = z.object({
  page: z.coerce.number().int().positive().optional().default(1),
  pageSize: z.coerce.number().int().positive().max(100).optional().default(20),
});
