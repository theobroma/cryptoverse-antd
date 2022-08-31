import { Card, Skeleton } from 'antd';
import React from 'react';
import styles from './CryptoСurrenciesView.module.css';

export const CryptoCardSkeleton = () => {
  return (
    <Card
      className={styles.CryptoCardSkeleton}
      title={<Skeleton avatar={false} title={false} paragraph={{ rows: 1 }} />}
      extra={<Skeleton.Avatar active={false} size="default" shape="circle" />}
    >
      <Skeleton avatar={false} title={false} paragraph={{ rows: 3 }} />
    </Card>
  );
};
