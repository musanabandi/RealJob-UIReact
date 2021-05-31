import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu } from 'antd';
import { UserOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom';
import store from 'store';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;


const HandleSignOut =()=>{

  store.clearAll()

}

const MainLayout=({children}) =>{

return(
    
  <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">Profile</Menu.Item>
        <Menu.Item key="3">Jobs</Menu.Item> 
        <Menu.Item key="4">My Job Application</Menu.Item>

        {
          store.get('user')?(

          <>
           <Menu.Item key="5"><Link to="/signin" onClick ={HandleSignOut}>SignOut</Link></Menu.Item>
          </>)
          :
          (

          <>
          
            <Menu.Item key="6"><Link to="/signup">SignUp</Link></Menu.Item>
            <Menu.Item key="7"><Link to="/signin">SignIn</Link></Menu.Item>
          </>)

        } 


      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      
      <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
        <Sider className="site-layout-background" width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
          >
            <SubMenu key="sub1" icon={<UserOutlined />} title="Categories">
              <Menu.Item key="1">Software Enginer</Menu.Item>
              <Menu.Item key="2">Agriculture, Food, Natural Resource</Menu.Item>
              <Menu.Item key="3">Man-power</Menu.Item>
              <Menu.Item key="4">Business Management</Menu.Item>
              <Menu.Item key="5">Health Science</Menu.Item>
              <Menu.Item key="6">Transport and Logistics</Menu.Item>
              <Menu.Item key="7">Information Technology</Menu.Item>
              <Menu.Item key="8">Hotel and Restaurants</Menu.Item>
            </SubMenu>

          </Menu>

        </Sider>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>
               
        {children}
            
    </Content>
      </Layout>
    </Content>


    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
 
 )
    }
export default MainLayout;