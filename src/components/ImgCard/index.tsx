import React from 'react';
import { Link } from 'umi';
import './index.less';

export interface ImgCardProps {}

export default () => {
  return (
    <Link to="/detail/123">
      <div className="imgCard-wrap">
        <div className="wrap-img">
          <img alt="img" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
          <span className="img-label img-score">9.0分</span>
          <span className="img-label img-update">更新至8集</span>
        </div>
        <div className="wrap-label">
          <h4>权力的游戏 第一季</h4>
          <p>2020-02-12 更新</p>
        </div>
      </div>
    </Link>
  );
};
// https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png
