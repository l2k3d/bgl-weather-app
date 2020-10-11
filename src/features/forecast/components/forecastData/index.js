import React from "react";
import "./index.css";
import { WeatherDataTile, WeatherIcon } from "../../components";
import _ from "lodash";

function forecastData({ forecast }) {
  const convertDate = (timestamp) => {
    let date = new Date(timestamp * 1000);
    return `${date.getHours()}:${date.getMinutes()}`;
  };

  return (
    <div className="container">
      <div className="container data-header">
      <div className="weather-data-icon">
        <WeatherIcon
          alt={_.head(forecast.weather).description}
          icon={_.head(forecast.weather).icon}
        />
        </div>
        <h2 className="weather-data-text">{forecast.name}</h2>
        
        <span className="weather-data weather-data-text">
          {_.head(forecast.weather).description}
        </span>
      </div>

      <div className="container  ">
        <div className="data-container">
        <WeatherDataTile
          title={"Current"}
          data={`${Math.round(forecast.main.temp)}${String.fromCharCode(8451)}`}
        />
        <WeatherDataTile
          title={"Maximum"}
          data={`${Math.round(forecast.main.temp_max)} ${String.fromCharCode(
            8451
          )}`}
        />
        <WeatherDataTile
          title={"Minimum"}
          data={`${Math.round(forecast.main.temp_min)} ${String.fromCharCode(
            8451
          )}`}
        />
        <WeatherDataTile
          title={"Pressure"}
          data={`${Math.round(forecast.main.pressure)}`}
        />
        <WeatherDataTile
          title={"Humidity"}
          data={`${Math.round(forecast.main.humidity)} ${String.fromCharCode(
            8451
          )}`}
        />
        <WeatherDataTile
          title={"Sunrise"}
          data={convertDate(forecast.sys.sunrise)}
        />
        <WeatherDataTile
          title={"Sunset"}
          data={convertDate(forecast.sys.sunset)}
        />
      </div>
      </div>
    </div>
  );
}

export default forecastData;
