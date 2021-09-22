import React, { lazy, Suspense } from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import { LoadingPage, Navbar } from '../@components';
import { IRoute, ROUTES } from '../@types';

const MIN_LAZY_DELAY = 300;

const CryptoСurrenciesView = lazy(async () => {
  const [moduleExports] = await Promise.all([
    import(
      /* webpackChunkName: "CryptoСurrenciesView" */ '../@views/CryptoСurrenciesView'
    ),
    new Promise((resolve) => setTimeout(resolve, MIN_LAZY_DELAY)),
  ]);
  return moduleExports;
});

// import { Exchanges, Homepage, News, Cryptocurrencies, CryptoDetails, Navbar } from './components';
const { Header, Footer, Sider, Content } = Layout;

export const APP_MAIN_ROUTES: IRoute[] = [
  // {
  //   component: HomeView,
  //   path: ROUTES.ROOT,
  //   exact: true,
  // },
  {
    component: CryptoСurrenciesView,
    path: ROUTES.CRYPTOCURRENCIES,
    exact: true,
  },
];

const App = () => (
  <div className="app">
    <Layout style={{ height: '100vh' }}>
      <Sider width={300}>
        <Navbar />
      </Sider>
      <Layout>
        {/* <Header>Header</Header> */}
        {/* ROUTES */}
        <Suspense fallback={<LoadingPage />}>
          <Switch>
            <Redirect from="/index.html" to="/" exact />
            {APP_MAIN_ROUTES.map((route: IRoute) => (
              <Route key={route.path} {...route} />
            ))}
            {/* <Route component={Page404View} /> */}
          </Switch>
        </Suspense>
        {/* / ROUTES */}
        {/* <Content>Content</Content> */}
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  </div>
);

export default App;
