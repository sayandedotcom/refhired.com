import { MessageResponse } from "./MessageResponse.js";

export default interface ErrorResponse extends MessageResponse {
  stack?: string;
}
