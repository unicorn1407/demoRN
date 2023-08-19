import {createAsyncThunk} from '@reduxjs/toolkit';
import { login, signin, signup } from './service';


export type SignUpActionParams = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export type SignInActionParams = {
  email: string;
  password: string;
}

export const signupThunk = createAsyncThunk('auth/signup', async (userData: SignUpActionParams, { rejectWithValue }) => {
  try {
    const response = await signup(userData);
    return response;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const loginThunk = createAsyncThunk('auth/login', async (userData: SignInActionParams, { rejectWithValue }) => {
  try {
    const response = await signin(userData);
    return response;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});