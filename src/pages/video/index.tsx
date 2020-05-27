import React from 'react';
import {
  Player,
  PlayToggle,
  BigPlayButton,
  ControlBar,
  ReplayControl,
  ForwardControl,
  PlaybackRateMenuButton,
} from 'video-react';
import { history, Link } from 'umi';
import { Tabs, Button, Card, Row, Col } from 'antd';
import poster from '@/assets/poster.jpg';
import ImgCard from '@/components/ImgCard';
import MyMessage from '@/components/MyMessage';
// import videoUrl from '/Users/momo/Desktop/a.mp4'
import './index.less';

const { TabPane } = Tabs;

export default () => {
  const tabChangeHandle = (key: any) => {
    console.log(key);
  };
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
  const Numbers = () => {
    const arr = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 10; i++) {
      arr.push(i);
    }
    const ListNumber = arr.map((_, index) => {
      return (
        <Button onClick={() => history.push(`/video/${index}`)} className="number-btn">
          第{index + 1}集
        </Button>
      );
    });
    return <div className="number-wrap">{ListNumber}</div>;
  };
  return (
    <div>
      <Player c controls data-setup="{}" poster={poster}>
        <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
        <BigPlayButton position="center" />
        <ControlBar autoHide={false}>
          <PlayToggle />
          <PlaybackRateMenuButton rates={[2, 1, 0.5]} />
          <ReplayControl seconds={10} order={2.2} />
          <ForwardControl seconds={10} order={3.2} />
        </ControlBar>
      </Player>
      <div className="video-name-wrap">
        <h1>
          权力的游戏 第一季 <span>第一集</span>{' '}
        </h1>
      </div>
      <div className="video-tip-wrap">
        <p>
          加载失败？请
          <span>点击刷新</span>
          几次！失效了？请
          <Link to="/msg">留言反馈</Link>
        </p>
      </div>
      <div style={{ minHeight: 100 }}>广告栏</div>
      <div className="tab-wrap">
        <Tabs defaultActiveKey="1" onChange={tabChangeHandle}>
          <TabPane tab="主线" key="1">
            <Numbers />
          </TabPane>
          <TabPane tab="备用" key="2">
            <Numbers />
          </TabPane>
          <TabPane tab="独家高清" key="3">
            <Numbers />
          </TabPane>
        </Tabs>
      </div>
      <Card title="猜你喜欢">
        <ListImg />
      </Card>
      <Card title="留言评论">
        <MyMessage />
      </Card>
    </div>
  );
};
