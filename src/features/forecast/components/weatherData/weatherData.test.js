import { mount } from 'enzyme';
import React from 'react';
import reactdom from 'react-dom';
import WeatherData from './index';

describe("", () => {

    const titleTest = 'Current';
    const dataTest = '10';

    it("Accepts data props", () => {
      const wrapper = mount(<WeatherData data={dataTest} title={titleTest} />);
      expect(wrapper.props().title).toEqual(titleTest);
    });

    it("Accepts title props", () => {

      const wrapper = mount(<WeatherData data={dataTest} title={titleTest} />);
      expect(wrapper.props().title).toEqual(titleTest);
    });

    it("Displays Data", () => {
      const wrapper = mount(<WeatherData data={dataTest} title={titleTest} />);
      const value = wrapper.find("h2").text();
      expect(value).toEqual(titleTest);
    });
  });