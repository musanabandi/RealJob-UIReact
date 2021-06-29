import React from 'react';
import ReactDOM from 'react-dom';
import { Card, Layout, Menu, Button } from "antd";
import { Link } from "react-router-dom";
import media from "../assets/media.jpg";
import dama from "../assets/dama.jpeg";

const About=()=>{
    return(
<Card style={{minHeight:'100vh'}}>
<h1 className="about-title" >About Us</h1>

<h3>Real Job Opportunity start in 2021 by preparing a better way of working, 
    help businesses find flexibility and connecting talent and opportunities.  </h3>



<Card>
<h1 font-size="bolder">Our mission</h1> <hr></hr><h3>
    Our Mission is to create economic opportunities, so people have better lives.
  

has taken us so much further. As a result, 
we want to become the world’s work marketplace where<br/>
 every day businesses of all sizes and 
independent talent from around the globe meet here to accomplish incredible things.
</h3>

</Card>

<h1>Our Vision</h1>
<h4>is to reach in all corners where every body is able to search easily job on our website.</h4>


<img src={media} className="about-pic" />
<img src={dama} className="about-pic" />

<h3 style={{fontSize:'20px'}}>AngeP:&nbsp;  President </h3>
<h3 style={{fontSize:'20px'}}>Damars: &nbsp; Backend Developer</h3>
<h3 style={{fontSize:'20px'}}>Clarise:&nbsp; she is our Technical Assistant</h3>
<h3 style={{fontSize:'20px'}}>Media:&nbsp;  CEO</h3>

<h1 style={{fontSize:'25px',fontWeight:'bolder'}}>Start your journey</h1>
&nbsp; &nbsp;

<Button type="primary" htmlType="submit" className='about-button'>
<Link to="/home">Find Job</Link>
                </Button>

</div>

</Card>

    );
};

export default About;