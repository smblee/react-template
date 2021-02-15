/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import { Helmet } from 'react-helmet-async';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { NotFoundPage } from 'app/pages/NotFoundPage/Loadable';
import { HomePage } from 'app/pages/HomePage/Loadable';
import { GlobalStyle } from 'styles/global-styles';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Helmet titleTemplate="%s - Hello World" defaultTitle=" Hello World">
        <meta name="description" content="Hello World App" />
      </Helmet>

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
};
