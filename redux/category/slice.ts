import { createSlice } from '@reduxjs/toolkit';
import { getListCategoryThunk } from './thunk';

const initialState = {
  categories: [],
  isLoading: false,
  error: null,
  userSelected: []
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setUserSelected: (state, action) => {
      state.userSelected = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getListCategoryThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getListCategoryThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categories = action.payload;
        state.error = null;
      })
      .addCase(getListCategoryThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
  },
});

export const { setUserSelected } = categorySlice.actions

export default categorySlice.reducer;