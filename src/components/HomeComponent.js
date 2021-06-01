import React from 'react';
import { Card, Layout, Menu, Button } from 'antd';
import {Link} from 'react-router-dom';
import store from 'store';

const card=() =>{
    return (
<Card className="card" >
<div class="card-container">
<h2  font-family="fantasy"><i>Software Developer</i></h2>
<h5>A computer programmer, sometimes called a software developer,
     .</h5>

       <div><h3>Posted Time:</h3>
       
       

       <button className="button"> <a href="SecondPage">Read More</a></button>
       </div>
    

</div>





</Card>
    );
};


export default card;
