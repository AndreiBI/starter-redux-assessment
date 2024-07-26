import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchSuggestion =
    createAsyncThunk(
        'suggestion/fetchSuggestion',
        async (arg, thunkAPI) => {
          const response = await fetch('http://localhost:3004/api/suggestion');
          const { data } = await response.json();
          return data;
        }
    );

const options = {
  name: 'suggestion',
  initialState,
  reducers: {},
  extraReducers: {
    /* Task 16: Inside `extraReducers`, add reducers to handle all three promise lifecycle states - pending, fulfilled, and rejected - for the `fetchSuggestion()` call */
  },
};

const suggestionSlice = createSlice(options);

export default suggestionSlice.reducer;

// Task 17: Create a selector, called `selectSuggestion`, for the `suggestion` state variable and export it from the file

export const selectLoading = (state) => state.suggestion.loading;
export const selectError = (state) => state.suggestion.error;
