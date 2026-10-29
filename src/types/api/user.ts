import { CurrentUser, SuccessResponse } from '../';

// Responses
interface GetMeResponse extends SuccessResponse<CurrentUser> {}

export type {
  // Responses
  GetMeResponse,
};
