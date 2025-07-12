export const APP_ERROR_CODES_BY_KEY = {
  PARSE_ERROR: 406,
  BAD_REQUEST: 400,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_SUPPORTED: 405,
  TIMEOUT: 408,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
} as const;

export type APP_ERROR_CODE_KEY = keyof typeof APP_ERROR_CODES_BY_KEY;

export class AppError extends Error {
  public readonly code;

  constructor(opts: { message?: string; code: APP_ERROR_CODE_KEY; cause?: unknown }) {
    const message = opts.message ?? opts.code;

    super(message);

    this.code = opts.code;
    this.name = "AppError";
  }

  getStatusFromCode(): number {
    return APP_ERROR_CODES_BY_KEY[this.code];
  }
}
