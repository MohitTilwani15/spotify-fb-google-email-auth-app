import React from 'react';
import UniversalRouter from 'universal-router';

import ErrorPage from '../pages/ErrorPage';
import SignupPage from '../pages/SignupPage';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import SpotifyPage from '../pages/SpotifyPage';
import ItunesPage from '../pages/ItunesPage';

const routes = [
  ...SignupPage,
  ...LoginPage,
  ...HomePage,
  ...SpotifyPage,
  ...ItunesPage
];

function resolveRoute(ctx) {
  const { route, params, fetchQuery, next } = ctx;

  // Allow to load routes on demand
  if (typeof route.children === 'function') {
    return route.children().then(x => {
      route.children = x.default;
      return next();
    });
  }

  if (!route.render) {
    return next();
  }

  // Start fetching data from GraphQL API
  const variables = route.variables ? route.variables(params, ctx) : params;
  const dataPromise = route.query ? fetchQuery(route.query, variables) : null;

  // Start downloading missing JavaScript chunks
  const componentsPromise = route.components
    ? route.components().map(x => x.then(x => x.default))
    : [];

  return Promise.all([...componentsPromise, dataPromise]).then(components => {
    const data = components.pop();
    const result = route.render(components, data, { ...ctx, variables });
    return result ? { ...result, data } : next();
  });
}

function errorHandler(error) {
  if ([401, 403].includes(error.code)) {
    return { redirect: `/login?error=${error.message}` };
  }

  return {
    title: error.code === '404' ? 'Page not found' : 'System Error',
    status: error.code || 404,
    component: <ErrorPage error={error} />,
  };
}

export default new UniversalRouter(routes, {
  resolveRoute,
  errorHandler,
});