import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  worksList: [],
};

const workSlice = createSlice({
  name: 'works',
  initialState,
});

export default workSlice.reducer;
