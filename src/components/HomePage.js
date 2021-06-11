import React from 'react';
import ReactDOM from 'react-dom';
import { Card, Tag, Space } from 'antd';
import dama from "../assets/dama.jpeg";
import girlsearch from '../assets/girlsearch.jpg';

const HomePage=()=>{
    return(

<div className="home-page">

    <div >
    <h1 className=" homeeee">You Can Build Your Carrier Here!!!!</h1>
    
    <div className="home-h2">
    Find A Great Job Here. Build Your Business Here</div> 
   
   <div className="home-h2">
   Take your Carrier to next Level..
   </div>
    &nbsp;

    <marquee width="90%" direction="up" height="100px">
    <img src={girlsearch} className="about-pic" width="15%" />
    </marquee>
    
    </div>
    
    </div>
    );
};

export default HomePage;
