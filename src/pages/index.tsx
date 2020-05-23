import React from 'react';
import { Carousel, Row, Col, Card } from 'antd';
import ImgCard from '@/components/ImgCard';
import './index.less';

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
        <Col key={index} xs={12} sm={8} md={6} xl={4}>
          <ImgCard />
        </Col>
      );
    });
    return <Row gutter={[16, 16]}>{ListItem}</Row>;
  };
  return (
    <div>
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
      <div className="adver-bar">
        <h1>广告栏</h1>
      </div>
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
    </div>
  );
};
