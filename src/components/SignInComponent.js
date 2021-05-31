import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Form, Input, Button, Checkbox, Card } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import RealJobApi from '../services/realJobApi';
import { useHistory } from 'react-router-dom';
import store from 'store';

const SignInComponent = () => {

  const history = useHistory();

  const onFinish = async (values) => {
    // console.log("Received values of form: ", values);

    const response = await RealJobApi.loginAuth(values);
    // console.log(response);
    if (!response) {
      return
    }
    if (response.status === 201) {
      
      store.set('user',{token:response.data.token})

      return history.push('/dashboard')
    }
  };


  return (
    <Card className="card-login">
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}

        onFinish={onFinish}

      >

        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: 'Please Enter your Email!',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>


        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember Me</Checkbox>
          </Form.Item>
          <a className="login-form-forgot" href="">
            Forgot Password
        </a>
        </Form.Item>


        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log In
        </Button>
        Or <a href="signup">Register Now!</a>
        </Form.Item>
      </Form>
    </Card>
  );
};
export default SignInComponent;