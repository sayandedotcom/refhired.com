import { GraphQLError, GraphQLErrorOptions } from "graphql";

class RateLimitError extends GraphQLError {
  constructor(message?: string, options?: GraphQLErrorOptions) {
    super(message ?? "Please Wait", {
      extensions: {
        code: "Rate Limit",
      },
      ...options,
    });
  }
}

export default RateLimitError;
