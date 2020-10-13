import React from 'react';
import { mount, shallow } from 'enzyme';
import ForecastError from './';
import { wrap } from 'lodash';


it("Forecast Error Renders", () => {
  shallow(<ForecastError />);
});

it("Shows Error Message", ()=> {
    const wrapper = mount(<ForecastError />);
      const value = wrapper.find("h1").text();
    expect(value).toEqual('Please enter a Valid Location');
});
