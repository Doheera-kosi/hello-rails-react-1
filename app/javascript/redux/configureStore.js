import { configureStore } from "@reduxjs/toolkit";
import { logger } from 'redux-logger';
import greetingReducer from "./greetingSlice";


const store = configureStore ({
  reducer: {
    message: greetingReducer
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})



export default store;