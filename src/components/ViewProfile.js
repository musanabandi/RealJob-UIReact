import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Drawer, List } from 'antd';


const ViewProfile= () =>{
        return(
        
          <>
          
            <List
         
              bordered
              renderItem={item => (
                <List.Item
                  key={item.id}
                  actions={[
                    <a onClick={this.showDrawer} key={`a-${item.id}`}>
                      View Profile
                    </a>,
                  ]}
                >
                   
                  <List.Item.Meta/>
                </List.Item>
              )}
            />
            <Drawer
              width={600}
              placement="right"
              
              
            >
             
            </Drawer>
          </>
          )

};
export default ViewProfile ;