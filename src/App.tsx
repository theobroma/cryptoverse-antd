import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import { Navbar } from './@components';

// import { Exchanges, Homepage, News, Cryptocurrencies, CryptoDetails, Navbar } from './components';
// import './App.css';
const { Header, Footer, Sider, Content } = Layout;

const App = () => (
  <div className="app">
    <Layout>
      <Sider>Sider</Sider>
      <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  </div>
);

export default App;
