import React from 'react';
import Routes from './Routes';
import createStore from './models/createStore';
import { Provider } from 'react-redux';

const { store } = createStore();

export default function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};
