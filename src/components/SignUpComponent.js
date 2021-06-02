import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import RealJobApi from '../services/apiRealJob';
import { useHistory } from 'react-router-dom'
import { Form, Input, Select, Checkbox, Button,  Card } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';



const { Option } = Select;

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

const SignUpComponent = () => {

    const history = useHistory();

    const [form] = Form.useForm();
    const onFinish = async (values) => {
        const res = await RealJobApi.signUp(values);
        // 
        if (!res) {
            return;
        }
        if (res.status === 201) {
            return history.push("/signin");
        }
    };


   
    
    return (

        <Card className="card-register">

            <Form
                className='signup-form'
                {...formItemLayout}
                form={form}
                name="register"
                onFinish={onFinish}
                initialValues={{
                    residence: ['Rwanda', 'Kigali'],
                    prefix: '250',
                }}
                scrollToFirstError
            >
                <h2>SignUp</h2>
                <p>Please Fill In This Form To Create An Account</p>

                <Form.Item
                    name="firstName"
                    // label="firstName"
                    rules={[
                        {
                            required: true,
                            message: 'Please Enter your First Name!',
                            whitespace: true,
                        },
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />}placeholder="First Name" 
                     style={{
            width: '400px',
          }} />
                </Form.Item>


                <Form.Item
                    name="lastName"
                    // label="secondName"
                    rules={[
                        {
                            required: true,
                            message: 'Please Enter your Last Name!',
                            whitespace: true,
                        },
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Last Name" 
                    
                    style={{
                        width: '400px',
                      }}
                    
                    />
                </Form.Item>


                <Form.Item
                    name="gender"
                    // label="gender"
                    rules={[
                        {
                            required: true,
                            message: 'invalid gender',
                        },
                    ]}
                >
                    <Select  placeholder="Gender"  style={{
            width: '400px',
          }}>
                        <Option value="male">Male</Option>
                        <Option value="female">Female</Option>
                    </Select>
                </Form.Item>


                <Form.Item
                    name="address"
                    // label="secondName"
                    rules={[
                        {
                            required: true,
                            message: 'Please Enter your Address!',
                            whitespace: true,
                        },
                    ]}
                >
                    <Input placeholder="Address"
                    
                    style={{
                        width: '400px',
                      }}
                    
                    />
                </Form.Item>


                <Form.Item
                    name="email"
                    // label="email"
                    rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                    ]}
                >
                    <Input placeholder="Email Or Phone"  
                    
                    style={{
                        width: '400px',
                      }}
                    
                    />
                </Form.Item>



                <Form.Item
                    name="password"
                    // label="Password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password placeholder="Password" 
                    

                    style={{
                        width: '400px',
                      }}
                    
                    />
                </Form.Item>





                <Form.Item
                    name="confirm"
                    // label="Confirm Password"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('The two passwords that you entered do not match!'));
                            },
                        }),
                    ]}
                >
                    <Input.Password placeholder="Confirm Password" 
                    
                    style={{
                        width: '400px',
                      }}
                    
                    />
                </Form.Item>


                <Form.Item
                    name="role"
                    // label="gender"
                    rules={[
                        {
                            required: true,
                            message: 'invalid gender',
                        },
                    ]}
                >
                    <Select placeholder="Role"  style={{
            width: '400px',
          }}>
                        <Option value="male">JobProvider</Option>
                        <Option value="female">JobSeeker</Option>
                    </Select>
                </Form.Item>




                <Form.Item
                    name="country"
                    // label=" country"
                    rules={[
                        {
                            required: true,
                            message: 'Please select your country!',
                        },
                    ]}
                >
                    <Input placeholder="Country"   
                    
                    style={{
                        width: '400px', }}
                    
                    />

                </Form.Item>


                <Form.Item
                    name="agreement"
                    valuePropName="checked"
                    rules={[
                        {
                            validator: (_, value) =>
                                value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                        },
                    ]}
                    {...tailFormItemLayout}
                >
                    <Checkbox>
                        I have read the <a href="">agreement</a>
                    </Checkbox>
                </Form.Item>


                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">
                        Register
        </Button>
                </Form.Item>
            </Form>
        </Card>
        
    );
};
export default SignUpComponent;