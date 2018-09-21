'use strict';

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './containers/App/Root';
import { configureStore, history } from './store/configureStore';
import './styles/app.global.scss';

const MOUNT_POINT = document.getElementById('root');

const store = configureStore();
render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  MOUNT_POINT
);

if (module.hot) {
  module.hot.accept('./containers/App/Root', () => {
    const NextRoot = require('./containers/App/Root');
    render(
      <AppContainer>
        <NextRoot store={store} history={history} />
      </AppContainer>,
      MOUNT_POINT
    );
  });
}
