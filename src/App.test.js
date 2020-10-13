import React from 'react';
import { mount, shallow } from 'enzyme';
import App from './App';


it("Application Renders", () => {
  shallow(<App />);
});
