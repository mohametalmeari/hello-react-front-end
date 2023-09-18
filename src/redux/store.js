import { configureStore } from '@reduxjs/toolkit';
import workReducer from './works/workSlice';

const store = configureStore({
  reducer: {
    works: workReducer,
  },
});

export default store;
