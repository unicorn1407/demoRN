import {createAsyncThunk} from '@reduxjs/toolkit';
import { getListCategories } from './service';


export const getListCategoryThunk = createAsyncThunk('category/list', async (accessToken: string, { rejectWithValue }) => {
  try {
    const response = await getListCategories(accessToken);
    return response;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});
