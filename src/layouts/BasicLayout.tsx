import React, { useState } from 'react';
import { Sidebar, Segment, Button } from 'semantic-ui-react'
import { Dispatch, connect } from 'dva'
import { ConnectState } from '@/models/connect';
import styles from './BasicLayout.css'

export interface BasicLayoutProps {
  dispatch: Dispatch;
}

const BasicLayout: React.FC<BasicLayoutProps> = props => {
  const { dispatch, children } = props;
  const handleSiderBar = (payload: boolean): void => {
    console.log('点击了')
    if(dispatch) {
      dispatch({
        type: 'global/changeSideBar',
        payload,
      });
    }
  }

  return (
    <div className={styles.main}>
      <h1>content</h1>
      <Button inverted color='purple' onClick={() => handleSiderBar(true)}>打开</Button>
    </div>
  );
};

export default connect(({ global }: ConnectState) => ({
  sidebar: global.sidebar
}))(BasicLayout)
