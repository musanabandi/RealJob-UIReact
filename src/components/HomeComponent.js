import React from "react";
import { Card, Layout, Menu, Button, Row, Col } from "antd";
import { Link } from "react-router-dom";
import store from "store";
import {
  LikeOutlined,
  ShareAltOutlined,
  DislikeOutlined,
  StarOutlined,
} from "@ant-design/icons";

import jobs from "../assets/data/job.json";

const allJobs = jobs;

const layout = () => {
  // console.log("<><><<;", allJobs[0]);
  return (
    <Card style={{ width: "100%" , minHeight:'100vh' }}>
      {allJobs.map((job) => {
        return (
          <Card.Grid style={{ margin: "10px", width: "30%", borderRadius:'5%',padding: 5, border:'0.5px solid gray' }}>
            <Link to="/viewpost">
            <div class="card-container">
              {" "}
              <Link to="/viewpost"></Link>
              <h1>
                <b>
                  <i>{job.title}</i>{" "}
                </b>
              </h1>
              <h3>{job.type}</h3>
              <hr style={{ color: "grey", opacity: "0.2" }}></hr>
              <h3 style={{ fontStyle: "Times New Roman" }}>
                Posted by: <b> {job.postedBy}</b>
              </h3>
              <h3 style={{ fontStyle: "Times New Roman" }}>
                Posted On: {job.postedTime}
              </h3>
            </div>
            </Link >
            <Row style={{ height: "50px", width: "100%" }}>
              <Col span={12} style={{ height: "50px", width: "100%" }}>
                <DislikeOutlined className="job-icon" />
                <LikeOutlined className="job-icon" g />
                <ShareAltOutlined className="job-icon" />
              </Col>
              <Col
                span={12}
                style={{
                  height: "50px",
                  width: "100%",
                  padding: "3%",
                  float: "right",
                }}
              >
                <Link to="/viewpost">
                <Button type="primary" htmlType="submit" >
                  Read more ...
                </Button>
                </Link>
              </Col>
            </Row>
          </Card.Grid>
        );
      })}
    </Card>
  );
};

export default layout;
