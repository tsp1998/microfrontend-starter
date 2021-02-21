import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';

//pages
import AboutPage from './pages/AboutPage'
import IndexPage from './pages/IndexPage'

export default ({ history }) => {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route exact path="/about" component={AboutPage} />
          <Route path="/" component={IndexPage} />
        </Switch>
      </Router>
    </div>
  );
};
