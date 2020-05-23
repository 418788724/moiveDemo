import React from 'react';
import { history, Link } from 'umi';
import { Button, Row, Col, Card, Divider } from 'antd';
import ImgCard from '@/components/ImgCard';
import './index.less';

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
    <div className="detail-wrap">
      <div className="detail-head-wrap">
        <h1>权力的游戏第一季</h1>
        <div className="detail-head-type">
          <p>
            类型：<span>剧情</span>
            <span>战争</span>
          </p>
          <p>2020-05-20 最后更新</p>
        </div>
      </div>
      <div className="detail-content-wrap">
        <Row>
          <Col md={8} sm={10} xs={12}>
            <div className="detail-content-img">
              <img alt="img" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
            </div>
          </Col>
          <Col md={16} sm={14} xs={12}>
            <div className="detail-content-right">
              <strong>导演:</strong> Kim Arndt / Anthony Chun / Lucas Gray / Andy Thom / Bob Suarez
              <br />
              <strong>编剧:</strong> 贾斯汀·罗兰 / 迈克·麦克马汉
              <br />
              <strong>主演:</strong> 肖恩·吉布朗尼 / 玛丽·麦克 / 贾斯汀·罗兰 / 温迪·麦克伦登-考威 /
              阿曼达·莱顿 / 安德鲁·马塔拉佐 / 凯瑞·华格伦 / 托马斯·巴布萨卡
              <br />
              <strong>类型:</strong> 喜剧 / 科幻 / 动画
              <br />
              <strong>国家/地区:</strong> 美国 <br />
              <strong>语言:</strong> 英语 <br />
              <strong>首播:</strong> 2020-05-08(美国)
              <br />
              <strong>季数:</strong> 1<br />
              <strong>集数:</strong> 8<br />
              <strong>又名:</strong> Солнечные противоположности
              <br />
              <strong>IMDb编码:</strong> tt8910922
              <br />
              <strong>评分:</strong> 9.3 <br />
            </div>
          </Col>
        </Row>
      </div>
      <div style={{ minHeight: 100 }}>广告栏</div>
      <div>
        <Card title="在线播放">
          <Numbers />
        </Card>
      </div>
      <div>
        <Card title="剧情简介">
          <p className="detail-intro">
            <span>
              《权力的游戏》是一部中世纪史诗奇幻题材的电视连续剧，该剧以美国作家乔治·R·R·马丁的奇幻巨作《冰与火之歌》七部曲为基础改编创作。
              <br />
              故事背景中虚构的世界，分为两片大陆：位于西面的“日落国度”维斯特洛；位于东面的类似亚欧大陆。维斯特洛大陆边境处发现远古传说中早已灭绝的生物开始，危险也渐渐在靠近这里。这片大陆的临冬城主暨北境统领艾德史塔克家族也迎来了老友兼国王劳勃·拜拉席恩的来访。国王希望艾德·史塔克（肖恩·宾SeanBean饰）能担任首相一职，对抗企图夺取铁王座的叛军。危情一触即发，整个王国看似平和的表面下却是波涛暗涌。权高位重的拜拉席恩家族、勇敢善良的史塔克家族、企图谋取王位的坦格利安家族、有着不可告人秘密的兰尼斯特家族。这些家族各怀鬼胎，这个国家将会陷入一场混战…..
            </span>
          </p>
          <div className="detail-imglist-wrap">
            <img alt="img" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
            <img alt="img" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
            <img alt="img" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
            <img alt="img" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
          </div>
        </Card>
      </div>
      <div className="page-numbers">
        <Link to="">
          <p>上一篇</p>
          <p>《波吉亚家族 第一季》全集/The Borgias Season 1在线观看</p>
        </Link>
        <Divider className="divider" type="vertical" />
        <Link to="">
          <p>下一篇</p>
          <p>《神秘博士 第六季》全集/Doctor Who Season 6在线观看</p>
        </Link>
      </div>
      <Card title="猜你喜欢">
        <ListImg />
      </Card>
    </div>
  );
};
