import React from "react";
import { Card, Layout, Menu, Button } from "antd";
import { Link } from "react-router-dom";
import store from "store";
import {
    LikeOutlined,
    ShareAltOutlined,
    DislikeOutlined, 
    StarOutlined

} from '@ant-design/icons'

import jobs from "../assets/data/job.json";

const allJobs = jobs;

const layout = () => {
  console.log("<><><<;", allJobs[0]);
  return (
    <Card style={{width:'100%'}} >
      {allJobs.map((job) => {
        return (
          <Card.Grid> &nbsp;
            <div class="card-container"> <Link to="/viewpost"></Link>
              <h1 >
               <b><i>{job.title}</i> </b> 
              </h1>
              <h3>
                {job.type}
              </h3>

              <hr style={{color:'grey', opacity:'0.2'}}></hr>

              <div>
                <h3 style={{fontStyle:'Times New Roman'}}>Posted by: <b>  {job.postedBy}</b></h3>

                <h3 style={{fontStyle:'Times New Roman'}}>Posted On: {job.postedTime}</h3>
                
                <div className="icons-home">
                <StarOutlined className="star-icon"/>
                &nbsp;&nbsp;&nbsp;
                <LikeOutlined className="like-icon"/>
                &nbsp;&nbsp;&nbsp;
                <DislikeOutlined  className="dislike-icon"/>
                &nbsp;&nbsp;&nbsp;
                <ShareAltOutlined className="share-icon"/>
                </div>
                
              </div>
 <button className="button-home"><Link to='ViewPost'>Read More</Link>
                  {" "} 
                 
                </button>

            </div>
            </Card.Grid>
        );
      })}
    </Card>
  );
};

export default layout;
