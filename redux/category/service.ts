import { api } from "helpers/api";

export const getListCategories = async (accessToken: string) => {
  try {
    const response = await api.get('/categories', undefined, {
      headers: {
        "Content-Type": 'application/json',
        "Accept" : 'application/json',
        "Authorization" : 'Bearer ' + accessToken
      },
    });

    if (!response.ok) {
      throw new Error('Get list failed: ' + response?.data?.message);
    }

    return response.data;
  } catch (error) {
    throw new Error(error?.message);
  }
};
