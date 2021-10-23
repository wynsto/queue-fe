import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import queueReducer from '../features/queue/queueSlice';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    queue: queueReducer,
  },
});
