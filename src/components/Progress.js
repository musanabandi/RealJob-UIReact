import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Progress, Card } from 'antd';
const ProgressComponent = () => {
return(
  <Card>
    <Progress percent={30} />
    <Progress percent={50} status="active" />
    <Progress percent={70} status="exception" />
    <Progress percent={100} />
    <Progress percent={50} showInfo={false} />
  </Card>
  );
  };
  export default ProgressComponent;
