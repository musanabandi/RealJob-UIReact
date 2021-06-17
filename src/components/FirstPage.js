import React from 'react';
import ReactDOM from 'react-dom';
import { Card, Layout, Menu, Button, Row, Col } from "antd";
import { Link } from "react-router-dom";
import './home.css';
import mtn from "../assets/mtn.png";
import job2 from "../assets/job2.jpg";
import SignInModal from '../components/ModalComponent';
import {
    LikeOutlined,
    ShareAltOutlined,
    DislikeOutlined,
    StarOutlined
  } from "@ant-design/icons";
 

import jobs from "../assets/data/job.json";
const allJobs = jobs;

const FirstHomes=()=>{
    return(
        
<Card style={{minHeight:"100vh"}} >


<div className="homes-container">
<div className='home-title'>
<h1 style={{color:'white'}}> Hundreds Of Users Searching <br/>For Their Dream Job.</h1>
</div>
<div>
<img src={job2} className="home-card" />
</div>

<Button type="primary" htmlType="submit" style={{marginLeft:'720px',width:'120px',height:'40px', marginTop:'90px'}} ><Link to='/signin'><p style={{fontSize:'20px'}}>Find Job</p></Link>
                  
                </Button>

</div>
<Card>
<div><h1 style={{color:'black', marginLeft:'600px',fontSize:'35px', fontWeight:'bolder'}}>Latest Jobs</h1></div>
</Card>

<Card style={{minHeight:'100vh'}}>


{allJobs.map((job) => {
   
        return (
          
<Card.Grid style={{ marginLeft: "140px ", marginTop: "60px ", width: "80%",padding: 5, border:'0.5px solid gray', border:'2px', height:'200px' }}>


<div class="card-container">
              {" "}
              <Link to="/viewpost"></Link>
              <h1 style={{ marginLeft:'-100px',fontSize:'35px'}}>
                <b style={{fontSize:'25px'}}>
                  <i>{job.title}</i>{" "}
                </b>
              </h1>
              <h3 style={{ marginLeft:'-100px',fontSize:'18px',color:'green'}}>{job.type}</h3>
             
              <h3 style={{ fontStyle: "Times New Roman",marginLeft:'-100px',fontSize:'18px'}}>
                Posted by: <b> {job.postedBy}</b>
              </h3>
              <h3 style={{ fontStyle: "Times New Roman",marginLeft:'-100px',fontSize:'18px'}}>
                Posted On: {job.postedTime}
              </h3>
            

  <Row style={{ height: "100px", width: "100%" }}>
              <Col span={12} >

              <img src={job.picture} style={{ height: "100px", width: "120px", marginTop:"-230px",marginLeft:'-200px' }}/>
             
              </Col>
              <Col
                span={12}
                style={{
                  height: "60px",
                  width: "100%",
                  float: "right",
                  marginTop:"-65px"
                }}
              >
                  <DislikeOutlined className="job-icon" />
                <LikeOutlined className="job-icon" />
                <ShareAltOutlined className="job-icon" />

                <Link to="/viewpost">
                <Button type="primary" htmlType="submit" className='button-wrapper'>
                  <p style={{fontSize:'18px'}}>Read more ...</p>
                </Button>
                </Link>
              </Col>
            </Row>
            </div>

            </Card.Grid>


            );
        })}
</Card>

</Card>





    );
};

export default FirstHomes;