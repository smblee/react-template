/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { NotFoundPage } from 'app/components/NotFoundPage/Loadable';
import { HomePage } from 'app/pages/HomePage/Loadable';
import { GlobalStyle } from 'styles/global-styles';

export function App() {
  return (
    <BrowserRouter>
      <Helmet titleTemplate="%s - React Boilerplate" defaultTitle="React Boilerplate">
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}
