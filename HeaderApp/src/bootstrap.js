import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import HeaderApp from './HeaderApp';

const mount = (mountElement, { onNavigate, defaultHistory, initialPath }) => {
  const history = defaultHistory || createMemoryHistory({ initialEntries: [initialPath] });

  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDOM.render(<HeaderApp history={history} />, mountElement);

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
  const headerAppRootElement = document.querySelector('#header-app-root');

  if (headerAppRootElement) {
    mount(headerAppRootElement, { defaultHistory: createBrowserHistory() });
  }
}

export { mount };
