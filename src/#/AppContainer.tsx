import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Layout } from 'antd';
import { LoadingPage, Navbar } from '../@components';
import { IRoute, ROUTES } from '../@types';

const MIN_LAZY_DELAY = 100;

const CryptoСurrenciesView = lazy(async () => {
  const [moduleExports] = await Promise.all([
    import(
      /* webpackChunkName: "CryptoСurrenciesView" */ '../@views/CryptoСurrenciesView'
    ),
    new Promise((resolve) => setTimeout(resolve, MIN_LAZY_DELAY)),
  ]);
  return moduleExports;
});

const { Footer, Sider } = Layout;

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

const App: React.FC = () => {
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
