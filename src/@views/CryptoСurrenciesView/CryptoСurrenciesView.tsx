import { nanoid } from '@reduxjs/toolkit';
import { Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../../@store/crypto/cryptoApi';
import { ICurrency } from '../../@types';
import { CryptoCard } from './CryptoCard';
import { CryptoCardSkeleton } from './CryptoCardSkeleton';

const CryptoСurrenciesView = () => {
  const count = 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState<ICurrency[]>([]);
  const skeletonCryptos = Array(20).fill('none');

  useEffect(() => {
    setCryptos(cryptosList?.data?.coins);
  }, [cryptosList]);

  const RealCardBlock = cryptos?.map((currency: ICurrency) => (
    <Col xs={24} sm={12} md={8} lg={6} key={currency.uuid}>
      <Link key={currency.uuid} to={`/crypto/${currency.uuid}`}>
        <CryptoCard currency={currency} />
      </Link>
    </Col>
  ));

  const SkeletonCardBlock = skeletonCryptos?.map(() => (
    <Col xs={24} sm={12} md={8} lg={6} key={nanoid()}>
      <CryptoCardSkeleton />
    </Col>
  ));

  return (
    <div style={{ padding: '20px', background: '#f0f2f5' }}>
      <Row gutter={[32, 32]}>
        {isFetching ? SkeletonCardBlock : RealCardBlock}
      </Row>
    </div>
  );
};

export default CryptoСurrenciesView;
