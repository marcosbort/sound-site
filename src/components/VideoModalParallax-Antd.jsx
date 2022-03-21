import React, { useState } from 'react';
import "./VideoModalParallax-Antd.css"
import { Modal, Button } from 'antd';

export const AppModal = () => {

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div id='modal' className='block modalBlock'>
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Llevá tu música al siguiente nivel</h2>
          <p>Te brindamos los equipos Hi-Res tope de gama de las primeras marcas</p>
        </div>
        <div className="contentHolder">
          <Button ghost onClick={showModal}>
            <i className="fas fa-play"></i>
          </Button>
          <Modal
            width={"80%"}
            // title="Soy un modal"
            centered={true}
            footer={null}
            visible={isModalVisible}
            onCancel={handleCancel}
            destroyOnClose={true}
          >
            <iframe width="100%" height="480px" src="https://www.youtube.com/embed/AnvXTyrqR_0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </Modal>
        </div>  

      </div>
      
    </div>
  )
}
