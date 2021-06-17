import React, { useState, useEffect, Component } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Link } from "react-router-dom";
import store, { set } from "store";
import logos from "../assets/logos.jpg";
import jobsearch  from "../assets/jobsearch.jpg";
import { Layout, Menu, Breadcrumb, Form, Input, Cascader, Select, Row, Col, Checkbox, Button,  DatePicker,
    AutoComplete, Card } from 'antd';


import {
  UserOutlined,
  MenuOutlined,
  FileSearchOutlined,
  FormOutlined,
  BankOutlined,
  FolderViewOutlined,
  FundViewOutlined,
  AppstoreAddOutlined,
    FacebookOutlined,
    GithubOutlined,
    PhoneOutlined,
    LinkedinOutlined,
    TwitterOutlined,
    MailOutlined,
    SlackOutlined
    
  
} from '@ant-design/icons';

const { Header, Content, Footer, Sider  } = Layout;
const { Option } = Select;

const handlerGetUrl = () => {
  console.log("<><<>><><><><><>; ", window.location.pathname);
};

const HandleSignOut = () => {
  store.clearAll();
};
const MainLayout = ({ children }) => {

  const [sideNavVisible, setSideNavVisible] = useState(false);
  const [urlPathname, setUrlPathname] = useState(window.location.pathname);

  useEffect(() => {
    if (urlPathname === "/dashbord") setSideNavVisible(true);
  }, [urlPathname]);


return(
  <Layout className="layout">
    <Header style={{position:'fixed', width:'100%', height:"80px", zIndex:'10' }}>
    <h1 style={{ color: "white", float: "left",fontSize:'20px' }}>
          {" "}
          <img src={logos} className="rjo" />
          Real Jobs Opportunity
        </h1>
     
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{float:'right '}}>
     
       <Menu.Item key="1"className='nav' >
              {" "}
              <Link to="/homepage" onClick={handlerGetUrl}>
                {" "}
                Home
              </Link>
            </Menu.Item>
            <Menu.Item key="3"className='nav'> <Link to="/aboutus">About Us</Link></Menu.Item>
            <Menu.Item key="4" className='nav' ><Link to="/home">All Jobs</Link></Menu.Item>

            {store.get("user") ? (
              <>
              <Menu.Item key="5" className='nav'> <Link to="/dashbord">Dashboard</Link></Menu.Item>
                <Menu.Item key="6"className='nav'>
                  <Link to="/signin" onClick={HandleSignOut}>
                    SignOut
                   </Link>
                </Menu.Item>
              </>
            ) : (
              <>
                <Menu.Item key="6" className='nav'>
                  <Link to="/signup">SignUp</Link>
                </Menu.Item>
                <Menu.Item key="7" className='nav'>
                  <Link to="/signin">SignIn</Link>
                </Menu.Item>
              </>
            )}
          </Menu>
    </Header>


    <Content style={{minheight:'100vh', marginTop:'70px' }}>
    

        <Card style={{height:'100px', width:'1800px'}}>
          <div style={{height:'100px' ,width:'500px'}}>
        <Form.Item style={{width:'400px',marginTop:'15px',height:'15px'}}>
        <Select placeholder="All Categories" style={{color:'black',height:'30px'}}>
          <Option >Accounting</Option>
          <Option >Computer Science</Option>
          <Option >Management</Option>
          <Option >Marketing and Sales</Option>
          <Option >Medecine</Option>
          <Option >Human Resource</Option>
          <Option >Food Science</Option>
          <Option >information system</Option>
          <Option >Research</Option>
          <Option >Public Health</Option>
          <Option >Telecommunication</Option>
          <Option >Project Management</Option>
          <Option >Mining</Option>
          <Option >Information Technology</Option>
          <Option >Social Science</Option>
        </Select>

             </Form.Item>
             </div>
           <div>
             <marquee><h1 className="job-title">
               Real Job Opportunity For All Category</h1></marquee>
             </div>
              </Card>

       
     
      

      {sideNavVisible ? (
   
      <Sider style={{minHeight:'100vh', position:'fixed'}}>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" style={{minHeight:'100vh',width:'500px'}}>
            <Menu.Item key="1" icon={<MenuOutlined />}style={{fontSize:'22px'}}>
              Dashboard
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}style={{fontSize:'20px'}}><Link to='/profile'>  Profile</Link>
              
            </Menu.Item>

          
            <Menu.Item key="9" icon={<FundViewOutlined />}style={{fontSize:'20px'}}><Link to='/home'> View Posted Job</Link>
             
            </Menu.Item>
           

            <Menu.Item key="10" icon={<AppstoreAddOutlined />}style={{fontSize:'20px'}}><Link to='/myjobapplication'> My Applications</Link>
             
            </Menu.Item>

            <Menu.Item key="10" icon={<FileSearchOutlined />}style={{fontSize:'20px'}}><Link to='/mypost'> View MyPosted Job</Link>
              
            </Menu.Item> 

            <Menu.Item key="10" icon={<FolderViewOutlined />}style={{fontSize:'20px'}}><Link to='/applicants'>  Applicants List</Link>
              
            </Menu.Item>
            <Menu.Item key="10" icon={<BankOutlined />}style={{fontSize:'20px'}}><Link to='/createjob'>  Create A Job</Link>
              
            </Menu.Item>
          </Menu>
        </Sider>
         ):null} 
        <div className="site-layout-content">{children}</div>
      
      
    </Content>

    <Footer className='footer-image' style={{height:'300px'}}>


    <div className="row">

<div className="col">
    
  <h1 style={{fontSize:'25px', color:'white'}}>
    About Us
    <hr style={{width:'70px', marginLeft:'0px'}} />
  </h1><br/>
  <p style={{fontSize:'18px', color:'white'}}>Real Job Opportunity</p>
  
</div>

<div className ="col">
<h1 style={{fontSize:'25px', color:'white'}}>
    Social Link
    <hr style={{width:'70px', marginLeft:'0px'}} />
  </h1><br/>
  <p style={{fontSize:'18px', color:'white'}}>
  
  <LinkedinOutlined className="socialIcon"/><p style={{marginTop:'-27px', color:'white',marginLeft:'25px'}} >Linkedin</p>
  <TwitterOutlined className="socialIcon"/><p style={{marginTop:'-27px', color:'white',marginLeft:'25px'}}>Twitter</p>
  <SlackOutlined className="socialIcon"/><p style={{marginTop:'-27px', color:'white',marginLeft:'25px'}}>Slack</p>
  <FacebookOutlined className="socialIcon"/><p style={{marginTop:'-27px', color:'white',marginLeft:'25px'}}>Facebook</p> 
  
  </p>
    
  </div>


  <div className ="col">

  <h1 style={{fontSize:'25px', color:'white'}}>
    Contact Us
    <hr style={{width:'70px', marginLeft:'0px'}} />
  </h1><br/>
 
  <p style={{fontSize:'18px', color:'white'}}>
  <PhoneOutlined className="socialIcon"/><p style={{marginTop:'-27px', color:'white',marginLeft:'25px'}}>(+250)783411559</p>
  <MailOutlined className="socialIcon"/><p style={{marginTop:'-27px', color:'white',marginLeft:'25px'}}>shecancode@gmail.com</p> 
    </p>
  </div>

  
 

   </div> 
     




    </Footer>
  </Layout>
  
);
    }

    export default MainLayout;