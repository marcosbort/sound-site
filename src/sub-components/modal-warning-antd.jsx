import React from 'react'
import { Modal, Button } from 'antd';
import {} from '@ant-design/icons';

export const WarningModal = () => {

  function warning() {
    Modal.warning({
      title: 'Title Warning Modal',
      content: 'Texto del mensaje...',
    });
  }

  return (
    <Button
      type='link'
      onClick={warning}
      className="btn-terminos-y-condiciones"
      style={{ margin: "0 0 0 -12px" }}
    >
      Link warning modal
    </Button>
  )
}
