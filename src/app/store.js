import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../features/counter/loginSlice';

export const store = configureStore({
   reducer: {
      login: loginReducer,
   },
});
