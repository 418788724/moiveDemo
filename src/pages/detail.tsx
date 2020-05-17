import React from 'react';
import { Link } from 'umi';
import styles from './index.less';

export default () => {
  return (
    <div>
      <h1 className={styles.title}>影片详情</h1>
      <Link to="/video/123">播放</Link>
    </div>
  );
};
