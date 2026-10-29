import { apiClient } from '@/lib/api-client';
import { CurrentUser, GetMeResponse } from '@/types';
import { handleApiError } from '@/lib/error-handler';

const getMe = async (): Promise<CurrentUser> => {
  try {
    const endpoint = '/users/me';

    const response: GetMeResponse = await apiClient.get(endpoint);

    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
};

const logoutDevice = async (sessionId: string) => {
  try {
    await apiClient.delete(`/users/sessions/${sessionId}`);
  } catch (error) {
    throw handleApiError(error);
  }
};

export { getMe, logoutDevice };
