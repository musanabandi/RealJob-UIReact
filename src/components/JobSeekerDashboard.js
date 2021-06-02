import React from 'react';
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

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const JobSeekerApplication = () => {

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
      <Layout style={{ minHeight: '100vh' }}>
        <Sider>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<MenuOutlined />}>
              JobSeekerDashboard
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}>
              Create Profile
            </Menu.Item>
           
           
            <Menu.Item key="9" icon={<FolderViewOutlined />}>
              View Posted Job
            </Menu.Item>

            <Menu.Item key="9" icon={<AppstoreOutlined />}>
              Create Application
            </Menu.Item>


          </Menu>
        </Sider>
        <Layout className="site-layout">
          
          <Content style={{ margin: '0 16px' }}>





<Card className='card-dashboard'>
            <Form
                name="validate_other"
                {...formItemLayout}
                onFinish={onFinish}
                initialValues={{
                    remember: true,

                }}>

               <div className='dashboard-content'>
                   <p>JobPosition:</p>
                   <p>Posted Date:</p>
                   <p>DeadLine:</p>
               </div>



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
            {/* <p className="ant-upload-hint">Support for a single or bulk upload.</p> */}
          </Upload.Dragger>
        </Form.Item>
      </Form.Item>



                <Button type="primary" htmlType="submit" className="button">
                    Submit
        </Button>


            </Form>
        </Card>
               
            
            {/* <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              Bill is a cat.
            </div> */}



          </Content>
          
          {/*   */}
        </Layout>
      </Layout>
    );
  

}

 export  default JobSeekerApplication 