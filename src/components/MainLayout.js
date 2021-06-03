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
  FolderViewOutlined,
  InboxOutlined,
  AppstoreOutlined,
  UploadOutlined,
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
            <Menu.Item key="3">About Us</Menu.Item>

            {store.get("user") ? (
              <>
              <Menu.Item key="2"> <Link to="/dashboard">Dashboard</Link></Menu.Item>
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
          style={{ padding: "24px 0" }}
        >
          {sideNavVisible ? (
            <Sider className="site-layout-background" width={200}>
              <Menu
                mode="inline"
                defaultSelectedKeys={["0"]}
                defaultOpenKeys={["sub1"]}
                style={{ height: "100%" }}
              >
                <SubMenu
                  key="sub1"
                  icon={<UserOutlined />}
                  title="Jobs Categories"
                >
                  <Menu.Item key="0">All Jobs</Menu.Item>
                  <Menu.Item key="1">Software Enginer</Menu.Item>
                  <Menu.Item key="2">
                    Agriculture, Food, Natural Resource
                  </Menu.Item>
                  <Menu.Item key="3">Man-power</Menu.Item>
                  <Menu.Item key="4">Business Management</Menu.Item>
                  <Menu.Item key="5">Health Science</Menu.Item>
                  <Menu.Item key="6">Transport and Logistics</Menu.Item>
                  <Menu.Item key="7">Information Technology</Menu.Item>
                  <Menu.Item key="8">Hotel and Restaurants</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
          ) : store.get("user")? (
            <>
                    <Sider>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<MenuOutlined />}>
              JobSeekerDashboard
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}>
               Profile
            </Menu.Item>
           
           
            <Menu.Item key="9" icon={<FolderViewOutlined />}>
              View Posted Job
            </Menu.Item>

            <Menu.Item key="9" icon={<AppstoreOutlined />}>
              Create Application
            </Menu.Item>

            <Menu.Item key="9" icon={<AppstoreOutlined />}>
              List of All Applications
            </Menu.Item>


          </Menu>
        </Sider>
            </>
          ):null}

          <Content style={{ padding: "0 24px", minHeight: "100vh" }}>
            {children}
          </Content>
        </Layout>
      </Content>

      <Footer style={{ textAlign: "center" }}>
        Ant Design by Clarisse Damars Media n Ange
      </Footer>
    </Layout>
  );
};
export default MainLayout;
