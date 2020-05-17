import React from 'react';
import { Carousel, Row, Col, Card } from 'antd';
import ContentWrap from '@/components/ContentWrap';
import ImgCard from '@/components/ImgCard';

// const { Meta } = Card;

export default () => {
  const ListImg = () => {
    const arr = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 12; i++) {
      arr.push(i);
    }
    const ListItem = arr.map((_, index) => {
      return (
        // eslint-disable-next-line react/no-array-index-key
        <Col key={index} span={4}>
          <ImgCard />
        </Col>
      );
    });
    return <Row gutter={[16, 16]}>{ListItem}</Row>;
  };
  return (
    <ContentWrap>
      <Row>
        <Col span={18}>
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
              <ListImg />
            </Card>
            <Card title="热播剧集" extra={<a href="#">更多</a>}>
              <ListImg />
            </Card>
            <Card title="经典剧集" extra={<a href="#">更多</a>}>
              <ListImg />
            </Card>
          </div>
        </Col>
        <Col span={6}>
          <h1>right</h1>
        </Col>
      </Row>
    </ContentWrap>
  );
};
