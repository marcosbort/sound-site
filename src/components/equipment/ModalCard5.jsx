import React, { useCallback, useState } from 'react';
import { Modal, Button } from 'antd';
import image from "../../images/bg-sound-23.jpg";

export const ModalCard5 = () => {

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = useCallback(() => {
    setIsModalVisible(true);
  },[]);

  const handleOk =  useCallback(() => {
    setIsModalVisible(false);
  },[]);

  const handleCancel =  useCallback(() => {
    setIsModalVisible(false);
  },[]);

  return (
    <div>
      <Button
        type='link'
        onClick={showModal}
        className="btn-terminos-y-condiciones"
        style={{ margin: "0 0 0 -16px" }}
      >
        Tope de gama...
      </Button>
      
      <Modal 
      title="Micrófonos Condenser - Tope de gama" 
      visible={isModalVisible} 
      onOk={handleOk} 
      onCancel={handleCancel}
      footer={null}
      width="70%"
      >
      
        <img src={image} alt="soporte" style={{width: "100%"}} />
        <br />
        <p style={{margin:"20px 0"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus nihil eaque est sapiente sed in sunt aperiam ut quae illo ipsa cum, atque odio quia voluptatibus, suscipit qui deleniti magni, doloribus aut pariatur necessitatibus voluptatem corporis. Facere a nulla maiores?</p>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus nihil eaque est sapiente sed in sunt aperiam ut quae illo ipsa cum, atque odio quia voluptatibus, suscipit qui deleniti magni, doloribus aut pariatur necessitatibus voluptatem corporis. Facere a nulla maiores?</p>
      </Modal>
    </div>
  )
}
