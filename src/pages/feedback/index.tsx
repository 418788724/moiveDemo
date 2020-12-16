import React from 'react';
import { Link } from 'umi';
import { Card } from 'antd';

export default () => {
  return (
    <Card title="FAQ-常见问题汇总">
      <div>
        <strong>
          <span>【Q1】网站上所有视频都加载失败？</span>
        </strong>
        <br />
        【A1】可能是您所在地区的网络服务商屏蔽了视频资源，建议更换网络试试，或者使用网络代理。
        <br />
        &nbsp;
        <br />
        <strong>
          <span>【Q2】观看视频时容易出现卡顿？</span>
        </strong>
        <br />
        【A2】视频有多个播放源，可切换播放线路 或 重启网络（手机可通过开关飞行模式）。
        <br />
        &nbsp;
        <br />
        <strong>
          <span>【Q3】如何切换播放线路？</span>
        </strong>
        <br />
        【A3】在播放页面点选集列表上方有三个选项：主线、备用、独家高清，点击这个三个选项即可切换播放线路。
        <br />
        &nbsp;
        <br />
        <p>
          问题没有解决？<Link to="/msg">向管理员反馈</Link>{' '}
        </p>
      </div>
    </Card>
  );
};
