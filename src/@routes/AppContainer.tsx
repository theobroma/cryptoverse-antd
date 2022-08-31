import { Layout } from 'antd';
import pMinDelay from 'p-min-delay';
import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { LoadingPage, Navbar } from '../@components';
import { IRoute, ROUTES } from '../@types';

const MIN_LAZY_DELAY = 100;

const HomeView = lazy(() =>
  pMinDelay(import('../@views/HomeView'), MIN_LAZY_DELAY),
);

const CryptoСurrenciesView = lazy(() =>
  pMinDelay(import('../@views/CryptoСurrenciesView'), MIN_LAZY_DELAY),
);

const ExchangesView = lazy(() =>
  pMinDelay(import('../@views/ExchangesView'), MIN_LAZY_DELAY),
);

const { Footer, Sider } = Layout;

export const APP_MAIN_ROUTES: IRoute[] = [
  {
    component: HomeView,
    path: ROUTES.ROOT,
    exact: true,
  },
  {
    component: CryptoСurrenciesView,
    path: ROUTES.CRYPTOCURRENCIES,
    exact: true,
  },
  {
    component: ExchangesView,
    path: ROUTES.EXCHANGES,
    exact: true,
  },
];

const App = () => {
  const sidebarWidth = 300;
  return (
    <div className="app">
      <Layout style={{ height: '100vh' }}>
        <Sider
          width={sidebarWidth}
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
          }}
        >
          <Navbar />
        </Sider>
        <Layout style={{ marginLeft: sidebarWidth }}>
          {/* <Header>Header</Header> */}
          <Suspense fallback={<LoadingPage />}>
            <Switch>
              <Redirect from="/index.html" to="/" exact />
              {APP_MAIN_ROUTES.map((route: IRoute) => (
                <Route key={route.path} {...route} />
              ))}
              {/* <Route component={Page404View} /> */}
            </Switch>
          </Suspense>
          {/* <Content>Content</Content> */}
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default App;
