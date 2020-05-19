import React from 'react';
import './index.less';

export interface TopBarProps {}

interface TopOtherProps {
  index: Number;
}

export default () => {
  const TopOne = () => {
    return (
      <div className="top-one-wrap">
        <div className="wrap-img">
          <img alt="img" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
          <span className="img-label img-score">top1</span>
          <span className="img-label img-update">更新至8集</span>
        </div>
        <div className="wrap-label">
          <h4>权力的游戏 第一季</h4>
          <p>2020-02-12 更新</p>
        </div>
      </div>
    );
  };

  const TopOther: React.FC<TopOtherProps> = (props) => {
    return (
      <div className="top-other-wrap">
        <div className="wrap-index">{props.index}</div>
        <span>权力的游戏 第一季</span>
      </div>
    );
  };
  const ListImg = () => {
    const arr = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 10; i++) {
      arr.push(i);
    }
    const ListItem = arr.map((_, index) => {
      return (
        // eslint-disable-next-line react/no-array-index-key
        index < 1 ? <TopOne key={index} /> : <TopOther key={index} index={index + 1} />
      );
    });
    return <div>{ListItem}</div>;
  };
  return <ListImg />;
};
