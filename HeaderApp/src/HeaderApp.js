import React from 'react';
import { Router, Link } from 'react-router-dom';

export default ({ history }) => {
  return (
    <Router history={history}>
      <Router history={history}>
        <Link to="/">Home Page</Link>
        <Link to="/about">About Page</Link>
      </Router>
    </Router>
  );
};
