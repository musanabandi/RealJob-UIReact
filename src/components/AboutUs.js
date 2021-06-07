import React from 'react';
import ReactDOM from 'react-dom';
import { Card, Layout, Menu, Button } from "antd";
import { Link } from "react-router-dom";
import media from "../assets/media.jpg";
import dama from "../assets/dama.jpeg";

const About=()=>{
    return(
<Card>
<h1 className="about-title" >About Us</h1>
<h4>Real Job Opportunity</h4>



<h1>Our mission</h1> <h3>is to create economic opportunities so people have better lives 
has taken us so much further. As a result, 
we want to become the world’s work marketplace where
 every day businesses of all sizes and 
independent talent from around the globe meet here to accomplish incredible things.
</h3>
<h1>Our Vision</h1>
<h4>is to reach in all corners where every body is able to search easily job on our website.</h4>

<img src={media} className="about-pic" />
<img src={dama} className="about-pic" />

<p>AngeP: President </p>
<p>Damars: Backend Developer</p>
<p>Clarise:she is our Technical Assistant</p>
<p>Media: CEO</p>

<h1>Start your journey</h1>
&nbsp; &nbsp;
<button className="about-button"> <Link to="/signin">Find Job</Link></button>
</Card>
    );
};

export default About;