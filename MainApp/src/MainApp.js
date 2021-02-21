import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import { createBrowserHistory } from 'history';

//apps
const RemoteMarketingApp = lazy(() => import('./apps/RemoteMarketingApp'));
import RemoteHeaderApp from './apps/RemoteHeaderApp'

const history = createBrowserHistory();

const MainApp = () => {

  return (
    <Router history={history}>
      <RemoteHeaderApp />
      <div>
        <Suspense fallback="Loading...">
          <Switch>
            <Route path="/" component={RemoteMarketingApp} />
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
};

export default MainApp;