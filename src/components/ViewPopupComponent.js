import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Modal, Button, Space } from 'antd';

const ViewPopup=()=>{
    function info() {
        Modal.info({
          title: 'This is a notification message',
          content: (
            <div>
              <p>my application </p>
            </div>
          ),
          onOk() {},
        });
      }
        <Space>
          <Button type="primary" ><a href='myapplicants'>View</a></Button>
        </Space>
       
}
export default ViewPopup;