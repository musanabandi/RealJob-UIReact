import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Card, Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import store, { set } from "store";
import rjo1 from "../assets/rjo1.jpg";
import {
  UserOutlined,
  MenuOutlined,
  FileSearchOutlined,
  FormOutlined,
  BankOutlined,
  FolderViewOutlined,
  FundViewOutlined,
  AppstoreAddOutlined
} from "@ant-design/icons";

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const handlerGetUrl = () => {
  console.log("<><<>><><><><><>; ", window.location.pathname);
};

const HandleSignOut = () => {
  store.clearAll();
};

const MainLayout = ({ children }) => {

  const [collapsed, setCollapsed] = useState(false)
  const onCollapse = (collapsed)=>{
    setCollapsed(collapsed)
  }

  const [sideNavVisible, setSideNavVisible] = useState(false);
  const [urlPathname, setUrlPathname] = useState(window.location.pathname);

  useEffect(() => {
    if (urlPathname === "/home" || urlPathname === "/") setSideNavVisible(true);
  }, [urlPathname]);

  return (
    <Layout>
      <Header className="header">
        <h1 style={{ color: "white", float: "left" }}>
          {" "}
          <img src={rjo1} className="rjo" />
          Real Jobs Opportunity
        </h1>

        {/* <div className="logo" /> */}

        <div className="side-bar">
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              {" "}
              <Link to="/home" onClick={handlerGetUrl}>
                {" "}
                Home
              </Link>
            </Menu.Item>
            <Menu.Item key="3"> <Link to="/aboutus">About Us</Link></Menu.Item>

            {store.get("user") ? (
              <>
              <Menu.Item key="2"> <Link to="/progress">Dashboard</Link></Menu.Item>
                <Menu.Item key="5">
                  <Link to="/signin" onClick={HandleSignOut}>
                    SignOut
                  </Link>
                </Menu.Item>
              </>
            ) : (
              <>
                <Menu.Item key="6">
                  <Link to="/signup">SignUp</Link>
                </Menu.Item>
                <Menu.Item key="7">
                  <Link to="/signin">SignIn</Link>
                </Menu.Item>
              </>
            )}
          </Menu>
        </div>
      </Header>
      <Content style={{ padding: "0 0px", width: "100%" }}>
        <Layout
          className="site-layout-background"

          style={{ padding: "0px 0px 0px 0px" }}

        >
          {sideNavVisible ? (
            <Sider collapsible collapsed ={collapsed} onCollapse={onCollapse}  className="site-layout-background" widows={400} style={{ backgroundColor:"dark", minHeight:'100vh', }} >
              <Menu theme="white"
                mode="inline"
                defaultSelectedKeys={["0"]}
                defaultOpenKeys={["sub1"]}
                style={{ height: "100" }}
              >
                <SubMenu
                  key="sub1"
                  icon={<UserOutlined />}
                  title="Jobs Categories"
                >
                  <Menu.Item key="0"><Link to="/home">All Jobs</Link></Menu.Item>
                  <Menu.Item key="1"><Link to="/softawarePage">Software Enginer</Link></Menu.Item>
                  <Menu.Item key="2"><Link to="/agriculturePage">Agriculture, Food, Natural Resource</Link>
                    
                  </Menu.Item>
                  <Menu.Item key="3"><Link to="/manpowerPage">Man-power</Link></Menu.Item>
                  <Menu.Item key="4"><Link to="/businessPage">Business Management</Link></Menu.Item>
                  <Menu.Item key="5"><Link to="/healthPage">Health Science</Link></Menu.Item>
                  <Menu.Item key="6"><Link to="/transportPage">Transport and Logistics</Link></Menu.Item>
                  <Menu.Item key="7"><Link to="/informationPage">Information Technology</Link></Menu.Item>
                  <Menu.Item key="8"><Link to="/hotelPage">Hotel and Restaurants</Link></Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
          ) : store.get("user")? (
            <>

                    <Sider>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<MenuOutlined />}>
              Dashboard
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}><Link to='/profile'>  Profile</Link>
              
            </Menu.Item>

            <Menu.Item key="3" icon={<UserOutlined />}><Link to='/viewprofile'>  View Profile</Link>
              
              </Menu.Item>

            <Menu.Item key="9" icon={<FundViewOutlined />}><Link to='/home'> View Posted Job</Link>
             
            </Menu.Item>
            {/* <Menu.Item key="9" icon={<FormOutlined />}><Link to='/createapplication'> Create Application</Link>
              Create Application
            </Menu.Item> */}

            <Menu.Item key="10" icon={<AppstoreAddOutlined />}><Link to='/myjobapplication'> My Applications</Link>
             
            </Menu.Item>

            <Menu.Item key="10" icon={<FileSearchOutlined />}><Link to='/mypost'> View MyPosted Job</Link>
              
            </Menu.Item> 

            <Menu.Item key="10" icon={<FolderViewOutlined />}><Link to='/applicants'>  Applicants List</Link>
              
            </Menu.Item>
            <Menu.Item key="10" icon={<BankOutlined />}><Link to='/createjob'>  Create A Job</Link>
              
            </Menu.Item>
          </Menu>
        </Sider>
            </>

          ):null}



          <Content style={{ padding: "0 0px", minHeight: "100vh" }}>

            {children}
          </Content>
        </Layout>
      </Content>

      <Footer style={{ textAlign: "center" }}>

         Design by Clarisse Damars Media and Ange
      </Footer>
    </Layout>
  );
};
export default MainLayout;
