export interface ApiErrorDetails {
  path?: string[] | unknown;
  message: string;
}

export interface ApiErrorResponse {
  success: false;
  error: true;
  message: string;
  code: string;
  details?: ApiErrorDetails[] | null;
  timestamp: string;
}

/**
 * Helper to create standardized error responses
 */
export const createErrorResponse = (
  message: string,
  code = "INTERNAL_SERVER_ERROR",
  details: ApiErrorDetails[] | null = null
): ApiErrorResponse => ({
  success: false,
  error: true,
  message,
  code,
  details,
  timestamp: new Date().toISOString(),
});
