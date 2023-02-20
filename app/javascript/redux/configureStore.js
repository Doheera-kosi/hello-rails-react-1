import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './greetingSlice';

const store = configureStore({
  reducer: {
    message: greetingReducer,
  },
});

export default store;
