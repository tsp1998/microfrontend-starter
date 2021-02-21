import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import MarketingApp from './MarketingApp';

const mount = (mountElement, { onNavigate, defaultHistory, initialPath }) => {
  const history = defaultHistory || createMemoryHistory({ initialEntries: [initialPath] });

  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDOM.render(<MarketingApp history={history} />, mountElement);

  return {
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname } = history.location;

      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    },
  };
};


if (process.env.NODE_ENV === 'development') {
  const marketingAppDevRootElement = document.querySelector('#marketing-app-root');

  if (marketingAppDevRootElement) {
    mount(marketingAppDevRootElement, { defaultHistory: createBrowserHistory() });
  }
}

// We are running through container
// and we should export the mount function
export { mount };
