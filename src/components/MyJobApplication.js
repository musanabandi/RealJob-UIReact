import React ,{useState}from 'react';
import 'antd/dist/antd.css';
import ReactDOM from 'react-dom';
import JobApplication from '../assets/data/JobApplication.json';
import { Table, Tag, Space ,Button,notification} from 'antd';



const columns = [
 
  {
    title: 'Application Date',
    dataIndex: 'application-date',
    key: 'application-date',
   
  },
  {
    title: 'Company',
    dataIndex: 'company',
    key: 'campany',
    sorter: (a, b) => a.company.length - b.company.length,
    ellipsis: true,
    
  },


  {
    title: 'Position',
    dataIndex: 'position',
    key: 'position',
  },



  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    
  },
  {
    title: 'Action',
    // dataIndex: 'action',
    key: 'action',
    render: (text, record) => {
      const handleCancel=()=>{
    notification.success({message:'Successfuly canceled!'})
      }
    return(

      <Space size="middle">
        <a>View</a>
        <a style={{color: 'red'}} onClick={handleCancel}>Cancel</a>
      </Space>
    )}
    
  }
]






const MyJobApplication=() =>{

  const [sortedInfo, setSortedInfo]=useState(null);


const handleChange = (pagination,  sorter) => {
  console.log('Various parameters', pagination, sorter);

    setSortedInfo( sorter)

};
    return (

        (<Table columns={columns} dataSource={JobApplication} onChange={handleChange} />)
    );
};


export default MyJobApplication;