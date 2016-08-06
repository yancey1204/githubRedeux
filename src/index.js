import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import HomePage from './components/HomePage';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = () => {
  const store = createStore(reducers);

  return (
    <Provider store={store}>
      <MuiThemeProvider>
        <HomePage />
      </MuiThemeProvider>
    </Provider>
  );
};

render(<App />, document.getElementById('root'));
