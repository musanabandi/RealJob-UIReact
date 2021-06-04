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
} from 'antd';
const JobCreation = () => {
 const [componentSize, setComponentSize] = useState('default');

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <>
      <Form
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


          <h1>Job Creation Form</h1>
       
        <Form.Item label="JobTitle">
          <Input className= "input"/>
        </Form.Item>
        <Form.Item label="JobCategory">
          <Select>
            <Select.Option value="demo">Dentist</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="JobLocation">
          <TreeSelect
            treeData={[
              {
                title: 'Gasabo',
                value: 'Gasabo',
                children: [
                  {
                    title: 'Sector',
                    value: 'Jabana',
                  },
                ],
              },
            ]}
          />
        </Form.Item>
        <Form.Item label="JobOwner">
          <Cascader
            options={[
              {
                value: 'MTN',
                label: 'MTN',
                children: [
                  {
                    value: 'MTN',
                    label: 'MTN',
                  },
                ],
              },
            ]}
          />
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
    </>
  );
};

//ReactDOM.render(<FormSizeDemo />, document.getElementById('container'));
export  default JobCreation;
