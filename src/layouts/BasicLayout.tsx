import React, { Children } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';

import styles from './BasicLayout.less';
const { Header, Content, Footer } = Layout;

const BasicLayout: React.FC = props => {
  const { children } = props;

  return (
    <Layout className="layout">
      <Header className={styles.headerWrap}>
        <div className={styles.logo} />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">首页</Menu.Item>
          <Menu.Item key="2">今日更新</Menu.Item>
          <Menu.Item key="3">排行榜</Menu.Item>
          <Menu.Item key="4">网站地图</Menu.Item>
        </Menu>
        <div className={styles.headerSpanWrap}>
          <span>声明</span>
          <span>留言</span>
          <span>FAQ</span>
        </div>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className={styles.siteLayoutContent}>{children}</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Copyright © 2020 Oops 保留所有权利
      </Footer>
    </Layout>
  );
};

export default BasicLayout;
