import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Form, Input, Cascader, Select, Row, Col, Checkbox, Button,  DatePicker,
    AutoComplete,Card } from 'antd';
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
      span: 10,
    },
    sm: {
      span: 10,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 10,
      offset: 0,
    },
    sm: {
      span: 10,
      offset: 8,
    },
  },
};

const EducationRecord = () => {
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
    <Card>
<h1 style={{fontSize:'20px', marginLeft:'300px'}}>Education Records Form</h1>
    <Form className="education-profile"
      {...formItemLayout}
      form={form}
      name="Save your Education Records"
      onFinish={onFinish}
      initialValues={{
        residence: ['zhejiang', 'hangzhou', 'xihu'],
        prefix: '86',
      }}
      scrollToFirstError
    >
      
          
      <Form.Item
      
        name="Education Type"
        label="Education Type"
        rules={[
          {
            required: true,
            message: 'Please select Education Type!',
          },
        ]}
      >
        <Select placeholder="select your Education Type">
          <Option value="Primary School">Primary School</Option>
          <Option value="Secondary School">Secondary School</Option>
          <Option value="Technical College">Technical College</Option>
          <Option value="University">University</Option>

          <Option value="other">Other</Option>
        </Select>
      </Form.Item>

    
      
      
      <Form.Item
        name="Institution"
        label="Institution"
        placeholder="Institution"
        
        
        rules={[
          {
            type: 'Institution',
            message: 'your input is not valid!',
          },
          {
            required: true,
            message: 'Please input your Institution!',
          },
        ]}
      >
                        <AutoComplete options={websiteOptions} onChange={onWebsiteChange} placeholder="Institution">

        <Input />
        </AutoComplete>
      </Form.Item>

      <Form.Item
        name="Country"
        label="Country"
        placeholder="Country"
        
        
        rules={[
          {
            type: 'Country',
            message: 'The input is not valid Country!',
          },
          {
            required: true,
            message: 'Please input your Country',
          },
        ]}
      >
                <AutoComplete options={websiteOptions} onChange={onWebsiteChange} placeholder="Country">

        <Input />
        </AutoComplete>
      </Form.Item>
      <Form.Item
        name="Qualification Type"
        label="Qualification Type"
        rules={[
          {
            required: true,
            message: 'Please select your Qualification Type!',
          },
        ]}
      >
        <Select placeholder=" Qualification Type  ">
        <Option value=" Primary Leaving Certificate">Primary Leaving Certificate</Option>
          <Option value="Post Graduate Diploma"> Post Graduate Diploma</Option>
          <Option value="Certificate">Certificate</Option>
          <Option value=" Diploma"> Diploma</Option>
          <Option value=" Bachelor Degree">Bachelor Degree</Option>
          <Option value="Master's Degree">Master's Degree</Option>
          <Option value=" Doctoral Degree">Doctoral Degree</Option>
          <Option value="Advanced Diploma ">Advanced Diploma</Option>
          <Option value="others">others</Option>
        </Select>
      </Form.Item>

    

      <Form.Item
        name="&nbsp; &nbsp; &nbsp; &nbsp; Degree/Certificate/Diploma No"
        label="Degree/Certificate/Diploma No"
        placeholder="Degree/Certificate/Diploma No"
        
        
        rules={[
          {
            type: 'Degree/Certificate/Diploma No',
            message: 'The input is not valid Degree/Certificate/Diploma No!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
                <AutoComplete options={websiteOptions} onChange={onWebsiteChange} placeholder="Degree/Certificate/Diploma No">

        <Input />
        </AutoComplete>

      </Form.Item>
      <Form.Item label="GraduationDate">
          <DatePicker />
          </Form.Item>

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
        <Button type="primary" htmlType="submit" style={{marginLeft:'-200px'}}>
        Save Records        
        </Button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button type="secondary" htmlType="cancel" style={{color:'red'}}>
          Cancel
        </Button>
      </Form.Item>
    </Form> 
    </Card>         

  );
};

//ReactDOM.render(<RegistrationForm />, document.getElementById('container'));
export default EducationRecord;