 import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import './login.css';
import { Form, Input, Button, Checkbox, Card, Modal } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import RealJobApi from '../services/apiRealJob';
import { useHistory } from 'react-router-dom';
import store from 'store';

// import images from "../assets/login.jpg";

const SignInComponent = () => {

  const history = useHistory();

  const onFinish = async (values) => {
    // console.log("Received values of form: ", values);

    // const response = await RealJobApi.loginAuth(values);
    const response = {status:201};
    // console.log(response);
    if (!response) { 
      return
    }
    if (response.status === 201) {
      
      store.set('user',{token:'this is my token',role:'jobSeeker'})

      return history.push('/home')
    }
  };

 
 

  return (
    <Card className='login-backgraund' style={{minHeight:'100vh'}}>
      {/* <img src={images} /> */}
    <Card className="card-login">
  
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}

        onFinish={onFinish}

      >
       <h2 style={{color:'black'}}>SignIn</h2>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: 'Please Enter your Email!',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email Or Phone" />
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
        <div class='sign-content '>
        New User? <a href="signup">Click Here To Create Account!</a>
        </div>
        </Form.Item>
        
      </Form>

    </Card>
    </Card>
  );
};
export default SignInComponent;