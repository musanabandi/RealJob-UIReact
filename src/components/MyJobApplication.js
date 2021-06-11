import React ,{useState}from 'react';
import 'antd/dist/antd.css';
import ReactDOM from 'react-dom';
import JobApplication from '../assets/data/JobApplication.json';
import { Table, Tag, Space ,Button,notification, Modal} from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';



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
    title: 'JobTitle',
    dataIndex: 'jobtitle',
    key: 'jobtitle',
  },



  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    
  },
  {
    title: 'Action',
    
    key: 'action',
    render: (text, record) => {
      const handleCancel=()=>{
    notification.success({message:'Successfuly Canceled!'})
      }



      const { confirm } = Modal;

      function showConfirm() {
      
         
        confirm({
          title: 'Do You Want to Cancel These Items?',
          icon: <ExclamationCircleOutlined />,
          
          onOk() {
            handleCancel();
          },
          onCancel() {
            console.log('Cancel');
          },
      
      
        })
       
      }



    return(

      

      <Space size="middle">
         
        <a>View</a>
        <a style={{color: 'red'}} onClick={showConfirm} >Cancel</a>
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
      
      <div>
        <h1 className="title-details"> <strong> List of My Applications</strong></h1>

        (<Table columns={columns} dataSource={JobApplication} onChange={handleChange} />)
        </div>
        
    );
};


export default MyJobApplication;