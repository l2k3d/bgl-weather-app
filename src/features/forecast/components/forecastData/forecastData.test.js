import { mount,shallow } from 'enzyme';
import React from 'react';
import ForecastData from './index';
import _ from "lodash";


describe("Forecast Data", () => {

 
    it("Forecast Renders", () => {

        const data = {
            "coord": {
                "lon": -0.25,
                "lat": 52.57
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "base": "stations",
            "main": {
                "temp": 8.75,
                "feels_like": 4.77,
                "temp_min": 8.33,
                "temp_max": 9,
                "pressure": 1011,
                "humidity": 87
            },
            "visibility": 10000,
            "wind": {
                "speed": 4.6,
                "deg": 250
            },
            "clouds": {
                "all": 64
            },
            "dt": 1602541055,
            "sys": {
                "type": 1,
                "id": 1511,
                "country": "GB",
                "sunrise": 1602483697,
                "sunset": 1602522770
            },
            "timezone": 3600,
            "id": 2640354,
            "name": "Peterborough",
            "cod": 200
        };
    
        shallow(<ForecastData forecast={data} />);
      });
      
});