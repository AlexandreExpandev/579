/**
 * @interface ApiResponse
 * @description Standard success response structure for the API.
 */
export interface ApiResponse<T> {
  success: true;
  data: T;
  metadata?: {
    timestamp: string;
    [key: string]: unknown;
  };
}

/**
 * @interface ApiErrorResponse
 * @description Standard error response structure for the API.
 */
export interface ApiErrorResponse {
  success: false;
  error: {
    message: string;
    code?: string;
    details?: unknown;
  };
}

/**
 * @interface PagedMetadata
 * @description Metadata for paginated responses.
 */
export interface PagedMetadata {
  page: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
}

/**
 * @interface PagedApiResponse
 * @description Standard paginated success response structure.
 */
export interface PagedApiResponse<T> extends ApiResponse<T[]> {
  metadata: ApiResponse<T>['metadata'] & PagedMetadata;
}
