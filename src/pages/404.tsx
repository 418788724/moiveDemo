import React from 'react';
import { Result, Button } from 'antd';
import { history } from 'umi';

const NoFoundPage: React.FC = () => (
  <Result
    status="404"
    title="404"
    subTitle="Sorry, 页面不存在！"
    extra={
      <Button type="primary" onClick={() => history.push('/')}>
        回到首页
      </Button>
    }
  ></Result>
);

export default NoFoundPage;
