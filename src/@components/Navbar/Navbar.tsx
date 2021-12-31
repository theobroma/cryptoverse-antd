// https://github.com/ant-design/ant-design/issues/6576#issuecomment-398355506
import { Menu, Typography } from 'antd';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  HomeOutlined,
  MoneyCollectOutlined,
  // BulbOutlined,
  FundOutlined,
  //   MenuOutlined,
} from '@ant-design/icons';
import { ROUTES } from '../../@types';

const Navbar: React.FC = () => {
  const location = useLocation();
  return (
    <div>
      <div className="logo-container">
        {/* <Avatar src={icon} size="large" /> */}
        <Typography.Title level={2} className="logo">
          <Link to="/">Cryptoverse</Link>
        </Typography.Title>
        {/* <Button
          className="menu-control-container"
          onClick={() => setActiveMenu(!activeMenu)}
        >
          <MenuOutlined />
        </Button> */}
      </div>
      <Menu theme="dark" mode="inline" selectedKeys={[location.pathname]}>
        <Menu.Item icon={<HomeOutlined />} key={ROUTES.ROOT}>
          <Link to={ROUTES.ROOT}>Home</Link>
        </Menu.Item>
        <Menu.Item icon={<FundOutlined />} key={ROUTES.CRYPTOCURRENCIES}>
          <Link to={ROUTES.CRYPTOCURRENCIES}>Cryptocurrencies</Link>
        </Menu.Item>
        <Menu.Item icon={<MoneyCollectOutlined />} key={ROUTES.EXCHANGES}>
          <Link to={ROUTES.EXCHANGES}>Exchanges</Link>
        </Menu.Item>
        {/* <Menu.Item icon={<BulbOutlined />} key={ROUTES.NEWS}>
          <Link to={ROUTES.NEWS}>News</Link>
        </Menu.Item> */}
      </Menu>
    </div>
  );
};

export default Navbar;
