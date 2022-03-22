import React, { useCallback, useState } from "react";
import "./Video.css";
import { Modal, Button } from "antd";

export const Video = () => {

  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleShowModal = useCallback(() => {
    setIsModalVisible(true);
  }, []);

  const handleCancel = useCallback(() => {
    setIsModalVisible(false);
  }, []);

  return (
    <div id='modal' className='block modal-block'>
      <div className="container-fluid">
        <div className="title-holder">
          <h2>Llevá tu música al siguiente nivel</h2>
          <p>Te brindamos los equipos Hi-Res tope de gama de las primeras marcas</p>
        </div>
        <div className="content-holder">
          <Button ghost onClick={handleShowModal}>
            <i className="fas fa-play"></i>
          </Button>
          <Modal
            width={"80%"}
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
