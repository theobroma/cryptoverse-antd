import { Space, Spin } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import React from 'react';

export const LoadingPage: React.FC = () => {
  return (
    <Content
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div>
        <Space size="middle">
          <Spin size="large" />
        </Space>
      </div>
    </Content>
  );
};

export default LoadingPage;
