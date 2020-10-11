import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchForecast, forecastSelector,isCleanSelector, actions } from "./forecastSlice";
import {Search, ForecastData, ForecastError,Loading} from './components';
import "./forecast.css";

function Forecast() {
  const dispatch = useDispatch();
  const { forecast, loading, hasErrors } = useSelector(forecastSelector);
  const isClean  = useSelector(isCleanSelector);

  const getForecast = (search) => {
    dispatch(fetchForecast(search));
  };

  const renderForecast = () => {
    if (forecast.hasOwnProperty("name"))
      return <ForecastData forecast={forecast} />
    if (loading) return <Loading />
    if (hasErrors) return <ForecastError />


    return null
  };

  useEffect(() => {
    if(isClean){
    dispatch(fetchForecast());
    }
  }, [dispatch,isClean]);

  return (
    <div>
      <Search handleClick={getForecast}/>
      <div className="forecast-container">
        <div className="card">{renderForecast()}</div>
      </div>
    </div>
  );
}

export default Forecast;
