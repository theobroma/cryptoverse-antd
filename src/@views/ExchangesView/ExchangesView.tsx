/**
 * * Deprecated
 * * This endpoint requires the pro plan or higher
 */

import React from 'react';
import { Alert, Typography } from 'antd';

const ExchangesView = () => {
  return (
    <div>
      <Typography.Title level={1} style={{ margin: 0 }}>
        ExchangesView
      </Typography.Title>
      <Alert
        message={<span>This endpoint requires the pro plan or higher</span>}
        type="success"
      />
    </div>
  );
};

export default ExchangesView;

// import { Avatar, Col, Collapse, Row, Typography } from 'antd';
// import HTMLReactParser from 'html-react-parser';
// import millify from 'millify';
// import React from 'react';
// import { useGetExchangesQuery } from '../../@store/crypto/cryptoApi';

// // const { Title } = Typography;
// const { Text } = Typography;
// const { Panel } = Collapse;

// const ExchangesView: React.FC = () => {
//   const { data, isFetching } = useGetExchangesQuery('none');
//   const exchangesList = data?.data?.exchanges || [];

//   return (
//     <div style={{ padding: '20px', background: '#f0f2f5' }}>
//       {/* <Title level={2} className="heading">
//         ExchangesView
//       </Title> */}

//       <Row>
//         <Col span={6}>Exchanges</Col>
//         <Col span={6}>24h Trade Volume</Col>
//         <Col span={6}>Markets</Col>
//         <Col span={6}>Change</Col>
//       </Row>
//       <Row>
//         {exchangesList.map((exchange: any) => (
//           <Col span={24}>
//             <Collapse>
//               <Panel
//                 key={exchange.id}
//                 showArrow={false}
//                 header={
//                   <Row key={exchange.id}>
//                     <Col span={6}>
//                       <Text>
//                         <strong>{exchange.rank}.</strong>
//                       </Text>
//                       <Avatar
//                         className="exchange-image"
//                         src={exchange.iconUrl}
//                       />
//                       <Text>
//                         <strong>{exchange.name}</strong>
//                       </Text>
//                     </Col>
//                     <Col span={6}>${millify(exchange.volume)}</Col>
//                     <Col span={6}>{millify(exchange.numberOfMarkets)}</Col>
//                     <Col span={6}>{millify(exchange.marketShare)}%</Col>
//                   </Row>
//                 }
//               >
//                 {HTMLReactParser(exchange.description || '')}
//               </Panel>
//             </Collapse>
//           </Col>
//         ))}
//       </Row>
//     </div>
//   );
// };
