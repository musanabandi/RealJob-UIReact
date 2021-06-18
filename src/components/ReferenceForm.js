import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Form, Input, Cascader, Select, Row, Col, Checkbox, Button,  DatePicker,
    AutoComplete,Card } from 'antd';
const { Option } = Select;

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

const ReferenceRecord = () => {
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
<h1 style={{fontSize:'20px', marginLeft:'300px'}}>Reference Records Form</h1>
    <Form className="Reference-form"
      {...formItemLayout}
      form={form}
      name="Save your Reference Records"
      onFinish={onFinish}
      initialValues={{
        residence: ['zhejiang', 'hangzhou', 'xihu'],
        prefix: '86',
      }}
      scrollToFirstError
    >
      
          
      <Form.Item
      
        name="Reference Type"
        label="Reference Type"
        rules={[
          {
            required: true,
            message: 'Please select your Reference Type!',
          },
        ]}
      >
        <Select placeholder="select your Reference Type">
          <Option value="Previous Employer">Previous Employer</Option>
          <Option value="Current Employer">Current Employer</Option>
          <Option value="Teacher">Teacher</Option>
          <Option value="Lecturer">Lecturer</Option>

          <Option value="other">Other</Option>
        </Select>
      </Form.Item>

    
      <Form.Item
        name="Title"
        label="Title"
        rules={[
          {
            required: true,
            message: 'Please select your Reference Title!',
          },
        ]}
      >
        <Select placeholder=" Reference-Title  ">
        <Option value=" Mr ">Mr</Option>
          <Option value="Mrs"> Mrs</Option>
          <Option value="Ms">Ms</Option>
          <Option value=" Dr"> Dr</Option>
          <Option value=" Prof">Prof</Option>
          <Option value="others">others</Option>
        </Select>
      </Form.Item>
      
      

      <Form.Item
        name="Name"
        label="Name"
        placeholder="Name"
        
        
        rules={[
          {
            type: 'Name',
            message: 'The input is not valid Name!',
          },
          {
            required: true,
            message: 'Please input your Name',
          },
        ]}
      >
                <AutoComplete options={websiteOptions} onChange={onWebsiteChange} placeholder="Name">

        <Input />
        </AutoComplete>
      </Form.Item>
      

    

      <Form.Item
        name="&nbsp; &nbsp; &nbsp; &nbsp; Physical Address"
        label="Physical Address"
        placeholder="Physical Address"
        
        
        rules={[
          {
            type: 'Physical Address',
            message: 'The input is not valid Physical Address!',
          },
          {
            required: true,
            message: 'Please input your Physical Address!',
          },
        ]}
      >
                <AutoComplete options={websiteOptions} onChange={onWebsiteChange} placeholder="Physical Address">

        <Input />
        </AutoComplete>

      </Form.Item>
     

<Form.Item
        name="HomePhone"
        label="HomePhone"
        rules={[
          {
            required: true,
            message: 'Please input your HomePhone!',
          },
        ]}
      >
        <AutoComplete options={websiteOptions} onChange={onWebsiteChange} placeholder="HomePhone">
          <Input />
        </AutoComplete>
      </Form.Item>

      <Form.Item
        name="Email Address"
        label="Email Address"
        rules={[
          {
            required: true,
            message: 'Please input your Email Address!',
          },
        ]}
      >
        <AutoComplete options={websiteOptions} onChange={onWebsiteChange} placeholder="Email Address">
          <Input />
        </AutoComplete>
      </Form.Item>

     
      
      
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit" style={{marginLeft:'-200px'}}>
Create        </Button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button type="secondary" htmlType="" style={{color:'red'}}>
          Back to Profile
        </Button>
      </Form.Item>
    </Form> 
    </Card>         

  );
};

//ReactDOM.render(<RegistrationForm />, document.getElementById('container'));
export default ReferenceRecord;