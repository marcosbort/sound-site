import React from 'react'
import { Modal, Button } from 'antd';
import {} from '@ant-design/icons';

export const InfoModal = () => {

  function info() {
    Modal.info({
      title: 'This is a notification message',
      content: (
        <div>
          <p>some messages...some messages...</p>
          <p>some messages...some messages...</p>
        </div>
      ),
      onOk() {},
    });
  }

  return (
    <Button
      type='link'
      onClick={info}
      className="btn-terminos-y-condiciones"
      style={{ margin: "0 0 0 -12px" }}
    >
      Link info modal
    </Button>
  )
}
