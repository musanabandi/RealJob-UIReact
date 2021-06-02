import React from "react";
import { Card, Layout, Menu, Button } from "antd";
import { Link } from "react-router-dom";
import store from "store";
import {
    LikeOutlined,
    ShareAltOutlined,
    StarOutlined,

} from '@ant-design/icons'

import jobs from "../assets/data/job.json";

const allJobs = jobs;

const layout = () => {
  console.log("<><><<;", allJobs[0]);
  return (
    <Card style={{width:'100%'}}>
      {allJobs.map((job) => {
        return (
          <Card.Grid>
            <div class="card-container">
              <h1 >
               <b><i>{job.title}</i> </b> 
              </h1>
              <h3>
                {job.type}
              </h3>

              <hr></hr>

              <div>
                <h3>Posted by: <b>  {job.postedBy}</b></h3>

                <h3>Posted On: {job.postedTime}</h3>
                <div className="icons-home">
                <StarOutlined />
                <LikeOutlined/>
                <ShareAltOutlined/>
                </div>
                
                <button className="button-home">
                  {" "} 
                  <a href="ViewPost">Read More</a>
                </button>
              </div>
            </div>
          </Card.Grid>
        );
      })}
    </Card>
  );
};

export default layout;