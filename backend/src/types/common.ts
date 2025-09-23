/**
 * @summary Represents a generic service response structure.
 * This is useful for business logic layers to clearly indicate success or failure.
 * @template T The type of the data returned on success.
 * @template E The type of the error returned on failure.
 */
export type ServiceResponse<T, E = Error> =
  | { success: true; data: T }
  | { success: false; error: E };

/**
 * @summary Defines a basic entity structure with common audit fields.
 * Can be extended by specific database entity types.
 */
export interface BaseEntity {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}
