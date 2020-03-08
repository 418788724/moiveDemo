import React, { useState } from 'react';
import { Sidebar, Segment, Button } from 'semantic-ui-react'
import { Dispatch, connect } from 'dva'
import { ConnectState } from '@/models/connect';
import RightLayout from './RightLayout';
import BasicLayout from './BasicLayout';

export interface SiderLayoutProps {
    sidebar: boolean;
    dispatch: Dispatch;
  }

const SiderLayout: React.FC<SiderLayoutProps> = props => {
//   const [visible, setVisible ] = useState(false)
  const { children, dispatch, sidebar} = props;

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
    <Sidebar.Pushable>
      <Sidebar
        animation='overlay'
        icon='labeled'
        inverted='true'
        onHide={() => handleSiderBar(false)}
        vertical='true'
        direction='right'
        visible={sidebar}
        width='very wide'>
          <RightLayout />
      </Sidebar>
      <Sidebar.Pusher style={{
          width: '100%',
          height: '100%',
        }}>
        <BasicLayout />
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  );
};

export default connect(({ global }: ConnectState) => ({
    sidebar: global.sidebar
  }))(SiderLayout)
