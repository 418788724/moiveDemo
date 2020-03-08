import React, { useState } from 'react';
import { Image, Divider, Segment, Button, Icon } from 'semantic-ui-react'
import Login from '@/components/Login'
// import Register from '@/components/Register'
import logo from '../assets/logo.png'
import styles from './RightLayout.less'

const RightLayout: React.FC = props => {
  return (
    <div className={styles.main}>
      <div className={styles.logo}>
        <Image src={logo} size='small'/>
      </div>
      <div className={styles.login}>
        <Login />
        <Divider horizontal>还没有注册账号？</Divider>
        <Button icon labelPosition='right' color='black'>
          去注册 
          <Icon name='right arrow' />
        </Button>
      </div>
      <h1 className={styles.other_link}>其他链接</h1>
    </div>
  );
};

export default RightLayout;
