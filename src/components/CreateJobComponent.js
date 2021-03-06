 import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Card,
} from 'antd';
const JobCreation = () => {
 const [componentSize, setComponentSize] = useState('default');

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    
<Card>
      <Form className='create-job'
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 12,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >


          <h1 style={{fontSize:'25px', marginLeft:'100px'}}>Create Job Form</h1>
       
        <Form.Item label="JobTitle">
          <Input className= "input"/>
        </Form.Item>
        <Form.Item label="JobCategory">
          <Input className= "input"/>
        </Form.Item>

        <Form.Item name={['user', 'comment']} label="JobDescription" >
                <Input.TextArea className='content-comment'/>
                </Form.Item>


        <Form.Item label="JobLocation">
          <Input className= "input"/>
        </Form.Item>

        <Form.Item label="JobOwner">
          <Input className= "input"/>
        </Form.Item>


        <Form.Item label="PostedTime">
          <DatePicker />
        </Form.Item>
        <Form.Item label="Deadline">
          <DatePicker />
        </Form.Item>
        <Form.Item label="Number Of Position">
          <InputNumber />
        </Form.Item>
        <Form.Item label="Is Active">
          <Switch />
        </Form.Item>
        <Form.Item label="">
          <Button className="create-button"type="primary"
          >Create</Button>
        </Form.Item>
      </Form>
      </Card>
    
  );
};


export  default JobCreation;
