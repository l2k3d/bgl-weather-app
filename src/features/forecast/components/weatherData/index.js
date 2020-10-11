import React from "react";
import './index.css';

function WeatherData({ title, data }) {
  return (
    <div className="weather-data">
      <h2>{title}</h2>
      <span>{data}</span>
    </div>
  );
}

export default WeatherData;