import React, { useState } from "react";
import 'antd/dist/antd.css';
import { Table, Tag, Space, notification, Modal, Button } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import postedJobData from "../assets/data/postedJobData.json";
import JobCreation from '../components/CreateJobComponent';

const ListOfPostedJob = () => {
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
      key: "jobtitle",
      sorter: (a, b) => a.jobtitle.length - b.jobtitle.length  || a.localeCompare(b),
      ellipsis: true,
    },




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



      render: (text, record) => {
        const handleCancel = () => {
          notification.success({ message: 'Successfuly Deleted!' })
        }



        const { confirm } = Modal;

        function showConfirm() {


          confirm({
            title: 'Do You Want to Delete These Items?',
            icon: <ExclamationCircleOutlined />,

            onOk() {
              handleCancel();
            },
            onCancel() {
              console.log('Cancel');
            },


          })

        }



        return (



          <Space size="middle">

<Button type="ghost"style={{borderRadius:'20px'}}>
<a style={{color:'blue'}}> <i> View </i> </a> 
        
          </Button>
            

            <Button type="ghost" onClick={() => setVisible(true)} style={{borderRadius:'20px'}}>
            <a style={{color:'green'}}> <i>Edit</i>  </a> 
          </Button>

          <Button type="ghost" onClick={showConfirm} style={{borderRadius:'20px'}}><a style={{color:'red'}}> <i>Delete</i> </a> 
            
          </Button>

           
          </Space>
        )
      }
    },
  ];


  const [visible, setVisible] = useState(false);


  const [sortedInfo, setSortedInfo]=useState(null);
  const handleChange = (pagination,  sorter) => {
    console.log('Various parameters', pagination, sorter);
  
      setSortedInfo( sorter)
  
      
  };





  return (
    <div>
      <h1 className="title-details"> <strong> List of My Posted Jobs</strong></h1>
      <Table columns={columns} dataSource={postedJobData} / >


      <Modal
        title="Update Your Post"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}
      >
        <JobCreation></JobCreation>
      </Modal>

    </div>

  )
};
export default ListOfPostedJob;