import React from "react";
import { Card, Layout, Menu, Button, Row, Col } from "antd";
import { Link } from "react-router-dom";
import store from "store";
import './home.css';
import {
  LikeOutlined,
  ShareAltOutlined,
  DislikeOutlined,
  StarOutlined,
} from "@ant-design/icons";

import jobs from "../assets/data/job.json";

const allJobs = jobs;


const layout = () => {
  
  
  return (

    <Card style={{ width: "100%" , minHeight:'100vh' }}>
      {allJobs.map((job) => {
        return (
          <Card.Grid style={{ marginLeft: "140px ", marginTop: "60px ", width: "80%",padding: 5, border:'0.5px solid gray', border:'2px', height:'200px' }}>


<div class="card-container">
              {" "}
              <Link to="/viewpost"></Link>
              <h1>
                <b>
                  <i>{job.title}</i>{" "}
                </b>
              </h1>
              <h3>{job.type}</h3>
             
              <h3 style={{ fontStyle: "Times New Roman" }}>
                Posted by: <b> {job.postedBy}</b>
              </h3>
              <h3 style={{ fontStyle: "Times New Roman" }}>
                Posted On: {job.postedTime}
              </h3>
            

  <Row style={{ height: "80px", width: "100%" }}>
              <Col span={12} >

              <img src={job.picture} style={{ height: "80px", width: "100px", marginTop:"-125px" }}/>
             
              </Col>
              <Col
                span={12}
                style={{
                  height: "40px",
                  width: "100%",
                  float: "right",
                  marginTop:"-20px"
                }}
              >
                  <DislikeOutlined className="job-icon" />
                <LikeOutlined className="job-icon" />
                <ShareAltOutlined className="job-icon" />

                <Link to="/viewpost">
                <Button type="primary" htmlType="submit" >
                  Read more ...
                </Button>
                </Link>
              </Col>
            </Row>
            </div>

            </Card.Grid>
        );
      })}
    </Card>
  );
};

export default layout;
