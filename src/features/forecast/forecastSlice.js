import {
  createSlice
} from '@reduxjs/toolkit';

import {CURRENT_WEATHER} from '../../app/api/openWeatherMapConstants';

export const initialState = {
  loading: false,
  hasErrors: false,
  isClean:true,
  forecast: {},
}

const forecastSlice = createSlice({
  name: 'forecast',
  initialState,
  reducers: {
    getForecast: state => {
      state.loading = true;
    },
    getForecastSuccess: (state, {
      payload
    }) => {
      state.forecast = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getForecastFailure: state => {
      state.loading = false;
      state.hasErrors = true;
      state.forecast = {};
    },
  },
})

export const {
  getForecast,
  getForecastSuccess,
  getForecastFailure
} = forecastSlice.actions;

export const forecastSelector = state => state.forecast;
export const isCleanSelector = state => state.isClean;
export const actions = forecastSlice.actions;

export default forecastSlice.reducer;


export function fetchForecast(searchLocation,isInit = false) {
  if(isInit) return;
  return async dispatch => {
    dispatch(getForecast());

    try {
      const request = CURRENT_WEATHER(searchLocation,'metric');
      const response = await fetch(request);
      const data = await response.json();
      const {cod} = data; 


      if(cod === 200){
        dispatch(getForecastSuccess(data));
      }else{
        dispatch(getForecastFailure());
      }


    } catch (error) {
      dispatch(getForecastFailure());
    }
  }
}