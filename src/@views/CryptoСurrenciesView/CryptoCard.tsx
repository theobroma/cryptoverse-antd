import { Card } from 'antd';
import millify from 'millify';
import React from 'react';
import { ICurrency } from '../../@types';
import styles from './CryptoСurrenciesView.module.css';

interface Props {
  currency: ICurrency;
}

export const CryptoCard: React.FC<Props> = ({ currency }) => {
  return (
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
  );
};
