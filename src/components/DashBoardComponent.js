import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Progress, Card,Button } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';

const ProgressComponent = () => {

    


return(
  <Card style={{ minHeight:'100vh', width:'100%', marginLeft:'280px'}} >
    
    <div style={{marginTop:'120px', width:'100px', height:'100%'}}>
    <h1 style={{fontSize:'25px', width:'500px'}} >Here We  Statistics </h1>

      Your All Applications
      <Progress type="circle" percent={100} style={{marginLeft:'50px'}}/> 
    Cancelled Applications
    <Progress type="circle" percent={70} status="exception"  style={{marginLeft:'50px'}} />
   Succesfully Applications
  <Progress type="circle" percent={75} style={{marginLeft:'50px'}} />

  </div>
 
</Card>

  );
  };

  export default ProgressComponent;
