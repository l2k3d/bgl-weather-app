import React from "react";
import './index.css';

function WeatherIcon({ alt, icon }) {
  return (
    <img
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={alt}
          className="weather-icon"
        />
  );
}

export default WeatherIcon;