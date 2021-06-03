/*import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu,Form, Input, Card, Button, Upload } from 'antd';
import {
  UserOutlined,
  MenuOutlined,
  FolderViewOutlined,
  InboxOutlined,
  AppstoreOutlined,
  UploadOutlined
 
} from '@ant-design/icons';

import { Calendar } from 'antd';
import {  DatePicker, TimePicker } from 'antd';

function onPanelChange(value, mode) {
  console.log(value, mode);
}


  

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const JobCreation = () => {

    const formItemLayout = {
        labelCol: {
            span: 6,
        },
        wrapperCol: {
            span: 12,
        },
    };

    const normFile = (e) => {
        console.log('Upload event:', e);
    };


    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    

    return (




<Card >
            <Form
                name="validate_other"
                {...formItemLayout}
                onFinish={onFinish}
                initialValues={{
                    remember: true,

                }}>

               <div className='dashboard-content'>
                   <p>Job Title:<input type="text" ></input></p>
                   <p>Posted Date:
                   <div className="site-calendar-demo-card">
    <Calendar fullscreen={false} onPanelChange={onPanelChange} />
  </div>,

                   </p>





                   <p>Number of Position:<input type="text" ></input></p>
               </div>



                

                

                <Form.Item className='dragger-document'>
        
      </Form.Item>



                <Button type="primary" htmlType="submit" className="button">
                    Create
        </Button>


            </Form>
        </Card>

    );
  

}

 export  default JobCreation*/


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
       { /*<Form.Item label="Form Size" name="size">
          //<Radio.Group>
            //<Radio.Button value="small">Small</Radio.Button>
            //<Radio.Button value="default">Default</Radio.Button>
           // <Radio.Button value="large">Large</Radio.Button>
         </Radio.Group>
    </Form.Item>*/}
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
