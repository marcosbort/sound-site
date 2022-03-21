import React, { useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Modal, Button } from 'antd';
import { LogIn } from './LoginForm-Antd';
import logoSound from "../images/logo-sound-01.png"

export const ResetPassword = () => {

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };


  return (
    <div>
      <>
        <UserOutlined style={{ margin: "0px -10px 0px 25px", fontSize: "16px", color: "#1890ff" }} />
        <Button
          type='link'
          onClick={showModal}
          style={{ margin: "0px -14px 0px 0px"}}
        >
          Reset Password
        </Button>
        <Modal 
          title="Restautrar Contraseña"
          visible={isModalVisible}
          onCancel={handleCancel}
          // closeIcon
          focusTriggerAfterClose="true"
          footer={null}
          bodyStyle={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}
        >
          <p>Si sos cliente, ingresá y llevá un seguimiento de nuestros avances en la masterización de tus producciones.</p>
          <LogIn />
            <img
              src={logoSound} 
              alt="logo-sound"
              style={{ margin: "-10px 10px 0px 0px", width: "100px" }}  
            />
        </Modal>
      </>
    </div>
  )
}
