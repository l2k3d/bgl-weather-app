import React from 'react';
import { mount, shallow } from 'enzyme';
import Forecast from './forecast';
import { Provider,useSelector } from 'react-redux';
import store from '../../app/store';
import { forecastSelector } from './forecastSlice';
import expectExport from 'expect';
import { ForecastData } from './components';
import { wrap } from 'lodash';


describe('Forecast Feature',() =>{

//check application works
it("Forecast renders without crashing", () => {
    shallow(
      <Provider store={store}>
        <Forecast />
      </Provider>
    );
  });

//check you can enter text into location field
it('Enter Text into Search Location input', () => {
  shallow(
    <Provider store={store}>
      <Forecast />
    </Provider>
  );
});

//can click search button
it("Can Click Search Button", () => {
  shallow(
    <Provider store={store}>
      <Forecast />
    </Provider>
  );
});
//check when location entered and search button clicked
it("Returns Forecast when search button clicked with Valid input", () => {
 
  const mockCallbackFunction = jest.fn();

  const city = 'peterborough';

  const wrapper = mount(
    <Provider store={store}>
      <Forecast />
    </Provider>
  );

  const searchInput = wrapper.find('input');
  const searchButton = wrapper.find('button');

  searchButton.simulate('click');
  
  expect(valueText).toEqual(city);

});

//enter invalid location get error
it("Renders Message asking for Appropriate location", () => {
  shallow(
    <Provider store={store}>
      <Forecast />
    </Provider>
  );
});


});
  
