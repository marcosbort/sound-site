import React, { useCallback, useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Modal, Button } from 'antd';
import { LoginForm } from './LoginForm';
import logoSound from "../images/logo-sound-01.png";


export const LoginModal = () => {

  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleShowModal = useCallback(() => {
    setIsModalVisible(true);
  }, []);

  const handleCancel = useCallback(() => {
    setIsModalVisible(false);
  }, []);


  return (
    <>
      <UserOutlined style={{ margin: "0px -10px 0px 25px", fontSize: "16px", color: "#1890ff" }} />
      <Button
        type='link'
        onClick={handleShowModal}
        style={{ margin: "0px -14px 0px 0px"}}
      >
        Login
      </Button>
      <Modal 
        title="Login - Mastering"
        visible={isModalVisible}
        onCancel={handleCancel}
        focusTriggerAfterClose="true"
        footer={null}
        bodyStyle={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}
      >
        <p>Si sos cliente, ingresá y llevá un seguimiento de nuestros avances en la masterización de tus producciones.</p>
        <LoginForm />
        <img
          src={logoSound} 
          alt="logo-sound"
          style={{ margin: "-10px 10px 0px 0px", width: "100px" }}  
        />
      </Modal>
    </>
  )
}
