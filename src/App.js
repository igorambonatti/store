import React from 'react';

import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import GlobalStyle from './styles/global';

import history from './services/history';

import Header from './components/Header/index';

import Routes from './routes/index';

import store from './store/index';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <GlobalStyle />
        <Header />
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
