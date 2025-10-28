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
export declare const createErrorResponse: (message: string, code?: string, details?: ApiErrorDetails[] | null) => ApiErrorResponse;
//# sourceMappingURL=apiError.d.ts.map