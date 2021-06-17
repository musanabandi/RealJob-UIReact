import React, { useState } from 'react';
import './index.css';
import { Form, Input, Button, Checkbox, Popconfirm, Row, Col, Modal,Card } from 'antd';
import { UserOutlined, LockOutlined,HomeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { FormInstance } from 'antd/lib/form';


const SignInModal = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
 
  const [visible, setVisible] = useState(false);
  return (
    <div className="home-container" xs={{ span: 4, offset: 1 }} xl={{ span: 24}} xxl={{ span: 24}}>
      <Row>
        <Col span={6} offset={1} className="first_column0n-loginpage">
          <Button type="primary" onClick={() => setVisible(true)}>
            LOGIN
          </Button>
		  
		  
		  
          <Modal
            centered
            visible={visible}
            onOk={() => setVisible(false)}
            onCancel={() => setVisible(false)}
            width={700}
          >
            <h2 style={{ textAlign: "center" }}>LOGIN FORM</h2><br />

           
  
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
          {/* <Button type="primary" htmlType="submit" className="login-form-button">
            LOGIN
        </Button> */}
        <div class='sign-content '>
        New User? <a href="signup">Click Here To Create Account!</a>
        </div>
        </Form.Item>
        
      </Form>

    
          </Modal>
		  
        </Col>
       
      </Row>
    </div>
  );
};
export default SignInModal ;