import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import forecastReducer from '../features/forecast/forecastSlice';

export default configureStore({
  reducer: {
    forecast: forecastReducer,
  },
  middleware:[thunk]
});
