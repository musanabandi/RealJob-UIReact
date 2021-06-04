import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Form, Input, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
const { Option } = Select;
const residences = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
const formItemLayout = {
  labelCol: {
    xs: {
      span: 4,
    },
    sm: {
      span: 4,
    },
  },
  wrapperCol: {
    xs: {
      span: 16,
    },
    sm: {
      span: 10,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 18,
      offset: 0,
    },
    sm: {
      span: 10,
      offset: 8,
    },
  },
};

const ProfileForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+25</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );
  const [autoCompleteResult, setAutoCompleteResult] = useState([]);

  const onWebsiteChange = (value) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
    }
  };

  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));
  return (
    <Form
      {...formItemLayout}
      form={form}
      name="Save profile"
      onFinish={onFinish}
      initialValues={{
        residence: ['zhejiang', 'hangzhou', 'xihu'],
        prefix: '86',
      }}
      scrollToFirstError
    >
      
    { /* <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
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
        <Input.Password />
      </Form.Item>*/}

      
      
      <Form.Item
        name="FirstName"
        label="FirstName"
        placeholder="FirstName"
        
        
        rules={[
          {
            type: 'FirstName',
            message: 'The input is not valid FirstName!',
          },
          {
            required: true,
            message: 'Please input your First Name!',
          },
        ]}
      >
                        <AutoComplete options={websiteOptions} onChange={onWebsiteChange} placeholder="FirstName">

        <Input />
        </AutoComplete>
      </Form.Item>

      <Form.Item
        name="LastName"
        label="LastName"
        placeholder="LastName"
        
        
        rules={[
          {
            type: 'LastName',
            message: 'The input is not valid LastName!',
          },
          {
            required: true,
            message: 'Please input your LastName',
          },
        ]}
      >
                <AutoComplete options={websiteOptions} onChange={onWebsiteChange} placeholder="LastName">

        <Input />
        </AutoComplete>
      </Form.Item>


      <Form.Item
        name="email"
        label="E-mail"
        placeholder="email"
        
        
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
                <AutoComplete options={websiteOptions} onChange={onWebsiteChange} placeholder="email">

        <Input />
        </AutoComplete>

      </Form.Item>





      <Form.Item
        name="Nationality"
        label="Nationality"
        rules={[
          {
            required: true,
            message: 'Please input your Nationality!',
          },
        ]}
      >
        <AutoComplete options={websiteOptions} onChange={onWebsiteChange} placeholder="Nationality">
          <Input />
        </AutoComplete>
      </Form.Item>


      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[
          {
            required: true,
            message: 'Please input your phone number!',
          },
        ]}
      >
  <AutoComplete options={websiteOptions} onChange={onWebsiteChange} placeholder="PhoneNumber">

        <Input
          /*addonBefore={prefixSelector}*/
          style={{
            width: '100%',
          }}
        />
        </AutoComplete>
      </Form.Item>

      {/* <Form.Item
        name="ID/Passport"
        label="ID/Passport"
        rules={[
          {
            required: true,
            message: 'Please input your ID or Passport!',
          },
        ]}
      >
        <Input
          addonBefore={prefixSelector}
          style={{
            width: '100%',
          }}
        />
      </Form.Item> */}


<Form.Item
        name="ID/Passport"
        label="ID/Passport"
        rules={[
          {
            required: true,
            message: 'Please input your ID/Passport!',
          },
        ]}
      >
        <AutoComplete options={websiteOptions} onChange={onWebsiteChange} placeholder="ID/Passport">
          <Input />
        </AutoComplete>
      </Form.Item>


      <Form.Item
        name="Location"
        label="Location"
        rules={[
          {
            required: true,
            message: 'Please input your Location!',
          },
        ]}
      >
        <AutoComplete options={websiteOptions} onChange={onWebsiteChange} placeholder="Location">
          <Input />
        </AutoComplete>
      </Form.Item>

      <Form.Item
        name="gender"
        label="Gender"
        rules={[
          {
            required: true,
            message: 'Please select gender!',
          },
        ]}
      >
        <Select placeholder="select your gender">
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="other">Other</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="Marital Status"
        label="Marital Status"
        rules={[
          {
            required: true,
            message: 'Please select your Marital Status!',
          },
        ]}
      >
        <Select placeholder="select your Marital Status">
          <Option value="Single">Single</Option>
          <Option value="Married">Married</Option>
        </Select>
      </Form.Item>

      
      
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Save Profile
        </Button>
        <Button type="secondary" htmlType="cancel">
          Cancel
        </Button>
      </Form.Item>
    </Form>
  );
};

//ReactDOM.render(<RegistrationForm />, document.getElementById('container'));
export default ProfileForm;