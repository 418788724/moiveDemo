import React from 'react';
import { Image, Divider, Segment, Button, Form } from 'semantic-ui-react'
import styles from './index.less';

const Login: React.FC = () => {
    return (
        <div className={styles.main}>
            <Form>
                <Form.Input fluid icon='user' iconPosition='left' placeholder='邮箱' />
                <Form.Input
                    fluid
                    icon='lock'
                    iconPosition='left'
                    placeholder='密码'
                    type='password'
                />
                <Button color='teal' fluid size='large'>
                    登录
                </Button>
            </Form>
        </div>
    );
};

export default Login;
