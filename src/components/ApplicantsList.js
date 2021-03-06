import React from "react";
import 'antd/dist/antd.css';
import { Table, Tag, Space } from 'antd';

import applicantData from "../assets/data/applicantData.json";
const columns = [

  {
    title: "Names",
    dataIndex: "names",
    key: "names",
    // render: (text) => <a>{text}</a>,
  },

  {
    title: "JobTitle",
    dataIndex: "jobtitle",
    key: "jobtitle",
  },

  {
    title: "ApplicationDate",
    dataIndex: "applicationDate",
    key: "applicationDate",
  },

  {
    title: "Status",
    dataIndex: "status",
    key: "status",

  },
 
  {
    title: "Action",
    key: "action",

    render: (text, record) => (
      <Space size="middle">
        <a>View</a>
        <a style={{color:'green'}}>Admit</a>
        <a style={{color:'red'}}>Reject</a>
      </Space>
    ),

    
  },

 
];
const ApplicantsList = () => {
  return( 
  <div>
    <h1 className="title-details"> <strong> List of All Applicants </strong></h1>
  <Table columns={columns} dataSource={applicantData} />
  </div>
  )
};
export default ApplicantsList;