import React from 'react';
import ReactDOM from 'react-dom';
import JobApplication from '../assets/data/JobApplication.json';
import { Table, Tag, Space } from 'antd';



const columns = [
 
  {
    title: 'Company',
    dataIndex: 'company',
    key: 'campany',
    
  },
   {
    title: 'Position', 
    dataIndex: 'position',
    key: 'position', 
  },

  {
    title: 'Application Date',
    dataIndex: 'application date',
    key: 'application date',
   
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
    
  }
]






const MyJobApplication=() =>{
    return (
        (<Table columns={columns} dataSource={JobApplication} />)
    );
};


export default MyJobApplication;