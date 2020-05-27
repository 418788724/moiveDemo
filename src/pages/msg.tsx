import React from 'react';
import { Card } from 'antd';
import MyMessage from '@/components/MyMessage';

export default () => {
  return (
    <div>
      <Card title="留言求片">
        <p>【求片】：如果你在本站没有找到想看的视频，可在此留下片名，我们将尽量更新；</p>
        <p>【报错】：如果你发现本站某个视频无法播放等问题，请在此留言反馈，我们将尽快修复； </p>
      </Card>
      <Card title="留言评论">
        <MyMessage />
      </Card>
    </div>
  );
};
