import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '../features/timesheet/tSheetSlice';

export const store = configureStore({
  reducer: counterSlice,
});
