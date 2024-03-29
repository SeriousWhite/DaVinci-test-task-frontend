import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { HelmetProvider } from 'react-helmet-async';

import { GlobalStyle } from 'globalStyled';
import theme from 'theme';
import Homepage from 'pages/Homepage';
import Dashboard from 'pages/Dashboard';
import Tables from 'pages/Tables';
import Charts from 'pages/Charts';
import {
  HOMEPAGE_PATH, DASHBOARD_PATH, TABLES_PATH, CHARTS_PATH,
} from 'constans/paths';

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route component={Homepage} exact path={HOMEPAGE_PATH} />
            <Route component={Dashboard} exact path={DASHBOARD_PATH} />
            <Route component={Tables} exact path={TABLES_PATH} />
            <Route component={Charts} exact path={CHARTS_PATH} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
