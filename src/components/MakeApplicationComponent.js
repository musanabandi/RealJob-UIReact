import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu,Form, Input, Card, Button, Upload,DatePicker } from 'antd';
import {
  
  InboxOutlined,
  UploadOutlined,
 
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const JobSeekerApplication = () => {

    const formItemLayout = {
        labelCol: {
            span: 6,
        },
        wrapperCol: {
            span: 8,
        },
    };

    const normFile = (e) => {
        console.log('Upload event:', e);
    };


    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    

    return (




<Card style={{height:'100vh'}}>
<h1 className="title-details"> <strong> Apply On This Form </strong></h1>
   
            <Form className='create-application'
                name="validate_other"
                {...formItemLayout}
                onFinish={onFinish}
                initialValues={{
                    remember: true,

                }}>

        
        
        <Form.Item label="ApplicationDate">
          <DatePicker />
        </Form.Item>



                <Form.Item name={['user', 'comment']} label="Comments" >
                <Input.TextArea className='content-comment'/>
                </Form.Item>


                <Form.Item
                    name="upload"
                    label="Upload"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}


                >
                    <Upload name="logo" action="/upload.do" listType="picture">
                        <Button icon={<UploadOutlined />}> Upload Your Photo</Button>
                    </Upload>
                </Form.Item>


                <Form.Item className='dragger-document'>
        <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
          <Upload.Dragger name="files" action="/upload.do">
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">Click Here to upload your Resume</p>
         
          </Upload.Dragger>
        </Form.Item>
      </Form.Item>



                <Button type="primary" htmlType="submit" className="createapp-button">
                    Apply
        </Button>


            </Form>
        </Card>

    );
  

}

 export  default JobSeekerApplication 