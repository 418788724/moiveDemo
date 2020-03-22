import React, { useState } from 'react';
import { Drawer, Button } from 'antd';
import { connect, Dispatch } from 'dva';

import { ConnectState, ConnectProps } from '@/models/connect';
import BasicLayout from '../BasicLayout';
import SecurityLayout from '../SecurityLayout';

import styles from './index.less';

export interface DrawerLayoutProps extends ConnectProps {
  sideBar: boolean;
  dispatch: Dispatch;
}

const DrawerLayout: React.FC<DrawerLayoutProps> = props => {
  const { dispatch, sideBar } = props;
  const handleSiderBar = (payload: boolean): void => {
    console.log(payload);
    if (dispatch) {
      dispatch({
        type: 'global/changeSideBar',
        payload,
      });
    }
  };
  return (
    <div className={styles.main}>
      <BasicLayout {...props} />
      <Drawer
        width={'30%'}
        mask={true}
        onClose={() => handleSiderBar(false)}
        visible={sideBar}
      >
        <SecurityLayout />
      </Drawer>
    </div>
  );
};

export default connect(({ global }: ConnectState) => ({
  sideBar: global.sideBar,
}))(DrawerLayout);
