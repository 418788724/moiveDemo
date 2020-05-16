import React from 'react';
import { Carousel, Row, Col, Card } from 'antd';
import ContentWrap from '@/components/ContentWrap';

const { Meta } = Card;

export default () => {
  return (
    <ContentWrap>
      <Row>
        <Col span={16}>
          <Carousel autoplay>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
          </Carousel>
          <div>
            <Card title="今日更新" extra={<a href="#">更多</a>}>
              <div>
                <Card
                  hoverable
                  style={{ width: 220 }}
                  cover={
                    <img
                      alt="example"
                      src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    />
                  }
                >
                  <Meta title="权利的游戏" description="this is description" />
                </Card>
              </div>
            </Card>
            <Card title="热播剧集" extra={<a href="#">更多</a>}>
              <p>今日更新内容</p>
            </Card>
            <Card title="经典剧集" extra={<a href="#">更多</a>}>
              <p>今日更新内容</p>
            </Card>
          </div>
        </Col>
        <Col span={8}>
          <h1>right</h1>
        </Col>
      </Row>
    </ContentWrap>
  );
};
