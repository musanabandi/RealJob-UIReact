import React ,{ useState }from 'react';
import 'antd/dist/antd.css';
import ReactDOM from 'react-dom';
import JobApplication from '../assets/data/JobApplication.json';
import { Table, Tag, Space ,Button,notification, Modal, Card} from 'antd';
import {Link} from 'react-router-dom';
import ViewPost from '../components/ViewPost';


const MyJobApplication=() =>{
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
        
        <Button type="primary" onClick={()=> setVisible(true)}>
        View
        </Button>

        <a style={{color: 'red'}} onClick={handleCancel}   >Cancel</a>
      </Space>
    )}
    
  },

  
]

const [visible, setVisible] = useState(false);

  const [sortedInfo, setSortedInfo]=useState(null);


const handleChange = (pagination,  sorter) => {
  console.log('Various parameters', pagination, sorter);

    setSortedInfo( sorter)

};

    return (

      <>
    <Table columns={columns} dataSource={JobApplication} onChange={handleChange} />

    
     
      <Modal
        
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}
      >
        <ViewPost></ViewPost>
      </Modal>
  </>
    );
};


     
  
  



export default MyJobApplication;