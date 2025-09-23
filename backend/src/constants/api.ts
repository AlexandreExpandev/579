/**
 * @summary
 * Provides a constant object for standard API error codes and messages.
 * These codes can be used in error responses to provide more context to clients.
 */
export const ApiErrorCodes = {
  // General
  UNAUTHORIZED: 'UNAUTHORIZED',
  FORBIDDEN: 'FORBIDDEN',
  NOT_FOUND: 'NOT_FOUND',
  INTERNAL_SERVER_ERROR: 'INTERNAL_SERVER_ERROR',

  // Validation
  VALIDATION_ERROR: 'VALIDATION_ERROR',
  INVALID_INPUT: 'INVALID_INPUT',

  // Feature-specific codes would go in their own constant files
  // e.g., GAME_NOT_FOUND: 'GAME_NOT_FOUND'
} as const;
