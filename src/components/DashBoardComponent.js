import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Progress, Card,Button } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';

const ProgressComponent = () => {

    


return(
  <Card style={{ minHeight:'100vh', width:'100%', marginLeft:'270px'}} ><div> <h1 className="h1" >This is Your Statistics As JobSeeker</h1>
      Your All Applications&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Progress type="circle" percent={100} /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    Cancelled Applications&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Progress type="circle" percent={70} status="exception" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
Succesfully Applications&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Progress type="circle" percent={75} />

</div>
<div>
<h1>This is Your Statistics As JobProvider</h1>
      
<Progress percent={30} size="small" />
    all applicants on Software Developers jobs<Progress percent={50} size="small" status="active" />
    Current Active Jobs<Progress percent={70} size="small" status="exception" />
    All posted Jobs<Progress percent={100} size="small" />

</div>
</Card>

  );
  };

  export default ProgressComponent;
