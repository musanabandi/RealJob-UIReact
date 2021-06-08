import React from "react";
import 'antd/dist/antd.css';
import { Table, Tag, Space } from 'antd';

import postedJobData from "../assets/data/postedJobData.json";
const columns = [

  {
    title: "PostedTime",
    dataIndex: "postedtime",
    key: "postedtime",
  },

  {
    title: "DeadLine",
    dataIndex: "deadline",
    key: "deadline",
  },

  {
    title: "JobTitle",
    dataIndex: "jobtitle",
    key: "obtitle",
    // render: (text) => <a>{text}</a>,
  },

  // {
  //   title: "JobCategory",
  //   dataIndex: "jobcategory",
  //   key: "jobcategory",
  // },

  // {
  //   title: "JobLocation",
  //   dataIndex: "joblocation",
  //   key: "joblocation",
  // },

  // {
  //   title: "JobOwner",
  //   dataIndex: "jobowner",
  //   key: "jobowner",
  // },


  {
    title: "Number Of Applications",
    dataIndex: "numberofposition",
    key: "numberofposition",
  },

  {
    title: "Is Active",
    dataIndex: "isactive",
    key: "isactive",
  },

 
  {
    title: "Action",
    key: "action",

    render: (text, record) => (
      <Space size="middle">
      <a>View</a>
        <a>Update</a>
        <a>Delete</a>
      </Space>
    ),

    
  },

 
 
];
const ListOfPostedJob = () => {
    
  return( 
 <div>
   <h1 className="title-details"> <strong> List of Posted Jobs</strong></h1>
  <Table columns={columns} dataSource={postedJobData} />
  </div>
  )
};
export default ListOfPostedJob ; 