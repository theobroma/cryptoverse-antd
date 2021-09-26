import { Col, Collapse, Row, Statistic, Typography } from 'antd';
import millify from 'millify';
import React from 'react';
// import { useGetExchangesQuery } from '../../@store/crypto/cryptoApi';

const { Title } = Typography;
const { Text } = Typography;
const { Panel } = Collapse;

const ExchangesView: React.FC = () => {
  //   const { data, isFetching } = useGetExchangesQuery();
  //   const exchangesList = data?.data?.exchanges;

  return (
    <div style={{ padding: '20px', background: '#f0f2f5' }}>
      <Title level={2} className="heading">
        ExchangesView
      </Title>
      {/* {!isFetching ? <Row gutter={[32, 32]}>1312313</Row> : null} */}
    </div>
  );
};

export default ExchangesView;
