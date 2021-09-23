import { Row, Col, Card } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import millify from 'millify';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../../@store/crypto/cryptoApi';
import { ICurrency } from '../../@types';
import styles from './CryptoСurrenciesView.module.css';

const CryptoСurrenciesView: React.FC = () => {
  const count = 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState<ICurrency[]>([]);

  useEffect(() => {
    setCryptos(cryptosList?.data?.coins);
  }, [cryptosList]);

  return (
    <Content>
      <Row gutter={[32, 32]}>
        {cryptos?.map((currency: ICurrency) => (
          <Col xs={24} sm={12} md={8} lg={6} key={currency.id}>
            <Link key={currency.id} to={`/crypto/${currency.id}`}>
              <Card
                title={`${currency.rank}. ${currency.name}`}
                extra={
                  <img
                    className={styles.cryptoImage}
                    src={currency.iconUrl}
                    alt={currency.name}
                  />
                }
                hoverable
              >
                <p>Price: {millify(Number(currency.price))}</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>Daily Change: {currency.change}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Content>
  );
};

export default CryptoСurrenciesView;
