import React from 'react';
import { Provider } from 'react-redux';

import { store } from './redux/store';

import MainLayout from './components/layout/MainLayout/MainLayoutContainer';

const App = () => (
  <Provider store={store}>
    <MainLayout />
  </Provider>
);

export default App;
