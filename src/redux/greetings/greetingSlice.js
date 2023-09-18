import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://hello-rails-api.onrender.com/';
export const getGreeting = createAsyncThunk(
  'greetings/getGreeting',
  async (thunkAPI) => {
    try {
      const resp = await axios.get(url);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Something went wrong');
    }
  },
);

const initialState = {
  greetingMsg: undefined,
  isLoading: true,
  error: undefined,
};

const greetingSlice = createSlice({
  name: 'greetings',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getGreeting.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getGreeting.fulfilled, (state, action) => {
        state.greetingMsg = action.payload.message;
        state.isLoading = false;
      })
      .addCase(getGreeting.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export default greetingSlice.reducer;
