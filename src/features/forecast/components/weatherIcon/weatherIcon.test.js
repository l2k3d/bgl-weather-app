import React from 'react';
import { mount, shallow } from 'enzyme';
import WeatherIcon from './';


it("Application Renders", () => {
  shallow(<WeatherIcon alt="test" icon='04n' />);
});
