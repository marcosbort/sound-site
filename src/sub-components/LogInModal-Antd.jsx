import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { LogIn } from './LoginForm-Antd';

export const HeaderLogin = () => {

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };


  return (
    <div>
      <>
        <Button
          type='link'
          onClick={showModal}
          style={{ margin: "0 0 0 -12px" }}
        >Login</Button>
        <Modal 
          visible={isModalVisible} 
          onOk={handleOk} 
          onCancel={handleCancel}
          closeIcon
          focusTriggerAfterClose="true"
          bodyStyle={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}
        >
          <p>Si sos cliente, podés iniciar sesión y llevar un seguimiento de los avances en la masterización de tus producciones.</p>
          <LogIn />
        </Modal>
      </>
    </div>
  )
}
