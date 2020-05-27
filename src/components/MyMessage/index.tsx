import React from 'react';
import { Link } from 'umi';
import { Form, Input, Button, Pagination, Card } from 'antd';
import MyComment from '../MyComment';
import styles from './index.less';

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};
const validateMessages = {
  // eslint-disable-next-line no-template-curly-in-string
  required: '请输入您的${label}',
  types: {
    // eslint-disable-next-line no-template-curly-in-string
    email: '${label}不是合法的邮箱',
    // eslint-disable-next-line no-template-curly-in-string
    number: '${label}不是合法的数字',
  },
};

export default () => {
  const onFinish = (values: any) => {
    console.log(values);
  };
  const onShowSizeChange = (current: Number, pageSize: Number) => {
    console.log(current, pageSize);
  };
  return (
    <div>
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item name={['user', 'introduction']} label="留言评论" rules={[{ required: true }]}>
          <Input.TextArea
            placeholder="欢迎发表您的意见,您的留言将在管理员审核通过后显示"
            autoSize={{ minRows: 4, maxRows: 6 }}
          />
        </Form.Item>
        <Form.Item name={['user', 'name']} label="昵称" rules={[{ required: true }]}>
          <Input placeholder="请输入您的昵称" />
        </Form.Item>
        <Form.Item
          name={['user', 'email']}
          label="Email"
          rules={[{ type: 'email', required: true }]}
        >
          <Input placeholder="请输入您的邮箱" />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 4 }}>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
      <p>
        您可能遇见的问题解决方案：
        <Link to="/msg">
          <span>常见问题汇总 FAQ</span>
        </Link>
      </p>
      <Card title="相关评论">
        <MyComment />
        <div className={styles.paginationCenter}>
          <Pagination
            showSizeChanger
            onShowSizeChange={onShowSizeChange}
            defaultCurrent={3}
            total={500}
          />
        </div>
      </Card>
    </div>
  );
};
