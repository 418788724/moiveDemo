import React, { useState } from 'react';
import { Sidebar, Segment, Button } from 'semantic-ui-react'
import { Dispatch, connect } from 'dva'
import { ConnectState } from '@/models/connect';
import UserLayout from './UserLayout';
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
    <Sidebar.Pushable as={Segment}>
      <Sidebar
        animation='overlay'
        icon='labeled'
        inverted='true'
        onHide={() => handleSiderBar(false)}
        vertical='true'
        direction='right'
        visible={sidebar}
        width='very wide'>
          <UserLayout />
      </Sidebar>
      <Sidebar.Pusher>
        <Segment basic>
          <BasicLayout />
        </Segment>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  );
};

export default connect(({ global }: ConnectState) => ({
    sidebar: global.sidebar
  }))(SiderLayout)
