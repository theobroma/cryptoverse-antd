import { Col, Row, Statistic, Typography } from 'antd';
import millify from 'millify';
import React from 'react';
import { useGetCryptosQuery } from '../../@store/crypto/cryptoApi';

const { Title } = Typography;

const HomeView: React.FC = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  return (
    <div style={{ padding: '20px', background: '#f0f2f5' }}>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      {!isFetching ? (
        <Row gutter={[32, 32]}>
          <Col span={12}>
            {/* <Statistic
              title="Total Cryptocurrencies"
              value={globalStats.total}
            /> */}
          </Col>
          <Col span={12}>
            {/* <Statistic
              title="Total Exchanges"
              value={millify(globalStats.totalExchanges)}
            /> */}
          </Col>
          <Col span={12}>
            {/* <Statistic
              title="Total Market Cap:"
              value={`$${millify(globalStats.totalMarketCap)}`}
            /> */}
          </Col>
          <Col span={12}>
            {/* <Statistic
              title="Total 24h Volume"
              value={`$${millify(globalStats.total24hVolume)}`}
            /> */}
          </Col>
          <Col span={12}>
            {/* <Statistic
              title="Total Cryptocurrencies"
              value={globalStats.total}
            /> */}
          </Col>
          <Col span={12}>
            {/* <Statistic
              title="Total Markets"
              value={millify(globalStats.totalMarkets)}
            /> */}
          </Col>
        </Row>
      ) : null}
    </div>
  );
};

export default HomeView;
