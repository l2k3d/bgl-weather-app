import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './app/store';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText(/learn/i)).toBeInTheDocument();
});


//to do :

//test case
// is application working


//does home page load


//does location field exist

//click search button

//does it get forecast

//Does it show error message on non existent location

// does it show error message where empty

