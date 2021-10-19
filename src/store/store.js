import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/slice.js';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
