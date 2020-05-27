import React from 'react';
import { Row, Col, Card, BackTop } from 'antd';
import { ArrowUpOutlined } from '@ant-design/icons';
import ContentWrap from '@/components/ContentWrap';
import TopBar from '@/components/TopBar';
import './MainLayout.less';

const MainLayout: React.FC = (props) => {
  const { children } = props;
  return (
    <ContentWrap>
      <Row className="content-row">
        <Col lg={18} md={24}>
          {children}
        </Col>
        <Col lg={6} md={0} className="content-right">
          <Card title="热度榜">
            <TopBar />
          </Card>
          <div className="adver-right-bar">
            <h1>广告栏</h1>
          </div>
          <div>
            <Card title="热门标签">
              <h1>标签</h1>
            </Card>
          </div>
        </Col>
        <BackTop>
          <ArrowUpOutlined className="to-top" />
        </BackTop>
      </Row>
    </ContentWrap>
  );
};

export default MainLayout;
