import React, { useState } from 'react';
import { Button } from 'antd';
import { Dispatch } from 'dva';
import styles from './index.less';

export interface BasicLayoutProps {
  dispatch: Dispatch;
}

const BasicLayout: React.FC<BasicLayoutProps> = props => {
  const { children, dispatch } = props;
  const handleSiderBar = (payload: boolean): void => {
    if (dispatch) {
      dispatch({
        type: 'global/changeSideBar',
        payload,
      });
    }
  };
  return (
    <div className={styles.main} onClick={() => handleSiderBar(true)}>
      {children}
    </div>
  );
};

export default BasicLayout;
