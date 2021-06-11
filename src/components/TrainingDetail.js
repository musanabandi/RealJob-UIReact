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

const TrainingDetail = () => {
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
<h1 style={{fontSize:'20px', marginLeft:'300px'}}>Trainings Records Form</h1>
    <Form className="training-detail"
      {...formItemLayout}
      form={form}
      name="Save your training detail"
      onFinish={onFinish}
      initialValues={{
        residence: ['zhejiang', 'hangzhou', 'xihu'],
        prefix: '86',
      }}
      scrollToFirstError
    >
      
          
     

    
      
      
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
        name="Award"
        label="Award"
        placeholder="Award"
        
        
        rules={[
          {
            type: 'Award',
            message: 'The input is not valid Award Name!',
          },
          {
            required: true,
            message: 'Please input your Award',
          },
        ]}
      >
                <AutoComplete options={websiteOptions} onChange={onWebsiteChange} placeholder="Award">

        <Input />
        </AutoComplete>
      </Form.Item>
     
      <Form.Item label="Award Date">
          <DatePicker />
          </Form.Item>



      
      
      <Form.Item {...tailFormItemLayout}>
      <Button type="primary" htmlType="submit" style={{color:'blue'}}>
          create
        </Button>
        <Button type="" htmlType="submit" style={{marginLeft:'-200px'}}>
Back to Profile        </Button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        
      </Form.Item>
    </Form> 
    </Card>         

  );
};

//ReactDOM.render(<RegistrationForm />, document.getElementById('container'));
 
    export default TrainingDetail;