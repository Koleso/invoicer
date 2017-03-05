import React from 'react';
import { compose } from 'recompose';
import { Provider, connect } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import configureRoutes from './configureRoutes';

import 'frontend/static/favicon.png';
import './styles/style.less';

const withStore = Component => ({ ...props, store }) => (
  <Provider store={store}>
    <Component {...props} />
  </Provider>
);

const renderApp = ({ store }) => (
  <Router
    history={syncHistoryWithStore(browserHistory, store)}
    routes={configureRoutes()}
  />
);

const App = compose(
  withStore,
)(renderApp);

export default App;