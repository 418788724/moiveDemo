import React from 'react';

import { Form, Input, Button, Checkbox, Divider } from 'antd';
import {
  UserOutlined,
  LockOutlined,
  ArrowRightOutlined,
  WechatOutlined,
  QqOutlined,
  WeiboCircleOutlined,
  createFromIconfontCN,
} from '@ant-design/icons';
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});

import logo from '@/assets/logo.png';
import styles from './index.less';

const Login = () => {
  const onFinish = values => {
    console.log('Received values of form: ', values);
  };

  return (
    <div className={styles.main}>
      <div className={styles.logo}>
        <img src={logo} />
      </div>
      <div className={styles.login}>
        <Form
          name="normal_login"
          className={styles.login_form}
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: '请输入用户名或邮箱',
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="用户名/邮箱"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: '请输入密码',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="密码"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>记住我</Checkbox>
            </Form.Item>
            <a className={styles.login_form_forgot} href="">
              忘记密码
            </a>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className={styles.login_form_button}
            >
              登录
            </Button>
            <Divider>OR</Divider>
            <p style={{ textAlign: 'center' }}>其他登录方式</p>
            <div className={styles.icons_list}>
              <WechatOutlined className={styles.anticon} />
              <QqOutlined className={styles.anticon} />
              <WeiboCircleOutlined className={styles.anticon} />
            </div>
          </Form.Item>
        </Form>
        <Button
          className={styles.to_register}
          type="primary"
          size="middle"
          icon={<ArrowRightOutlined />}
        >
          去注册
        </Button>
      </div>
      <div className={styles.other_link}>
        <ul className={styles.link_ul}>
          <li className={styles.link_li}>关于我们</li>
          <li className={styles.link_li}>联系我们</li>
          <li className={styles.link_li}>加入我们</li>
          <li className={styles.link_li}>友情链接</li>
        </ul>
      </div>
    </div>
  );
};

export default Login;
