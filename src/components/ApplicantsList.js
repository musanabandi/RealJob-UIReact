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
    title: "Position",
    dataIndex: "position",
    key: "position",
  },

  {
    title: "ApplicationDate",
    dataIndex: "applicationDate",
    key: "applicationDate",
  },

 
  {
    title: "Action",
    key: "action",

    render: (text, record) => (
      <Space size="middle">
        <a>View</a>
        <a>Reply</a>
      </Space>
    ),

    
  },

  {
    title: "Status",
    dataIndex: "status",
    key: "status",

    // render: (text, record) => (
    //   <Space size="middle">
    //     <a>ShortListed</a>
       
    //   </Space>
    // ),
  },
 
];
const ApplicantsList = () => {
  return( 
  <div>
    <h1 className="title-details"> <strong> All Applicants List</strong></h1>
  <Table columns={columns} dataSource={applicantData} />
  </div>
  )
};
export default ApplicantsList;