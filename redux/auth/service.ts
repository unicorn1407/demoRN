import { api } from "helpers/api";
import { SignInActionParams, SignUpActionParams } from "./thunk";

export const signup = async (userData: SignUpActionParams) => {
  try {
    const response = await api.post('/auth/signup', userData);

    if (!response.ok) {
      throw new Error('Signup failed: ' + response?.data?.message);
    }

    return response.data;
  } catch (error) {
    throw new Error(error?.message);
  }
};

export const signin = async (userData: SignInActionParams) => {
  try {
    const response = await api.post('/auth/signin', userData);

    if (!response.ok) {
      throw new Error('Sign in failed: ' + response?.data?.message);
    }

    return response.data;
  } catch (error) {
    throw new Error(error?.message);
  }
};