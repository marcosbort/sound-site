import React, { useCallback } from 'react'
import { Modal, Button } from 'antd';
import logoSound from "../images/logo-sound-01.png"

export const TermsAndConditions = () => {

  const info = useCallback(() => {
    Modal.info({
      title: 'Términos y Condiciones Sound©',
      content: (
        <div>
          <br />
          <p style={{ fontSize: "14px"}}>Accedés voluntariamente a la venta de tu información personal a civermafias.</p>
          <p style={{ fontSize: "14px"}}>Sound© no se responsabiliza sobre futuros ataques a cuentas bancarias o desalojo de fondos, ni sobre campañas de acción premeditadas, cuyo fin sea la substracción parcial, total, o parcialtotal de activos.</p>
          <p style={{ fontSize: "17px"}}>En Sound©, cuidamos tu privacidad * </p>
          <br />
          <br />
          <br />
          <br />
          <img
              src={logoSound} 
              alt="logo-sound"
              style={{ margin: "0px 0px -150px 75px", width: "100px" }}  
            />
          <p style={{ fontSize: "11px"}} >*manzana</p>
        </div>
      ),
    });
  }, []);

  return (
    <Button
      type='link'
      onClick={info}
      className="btn-terminos-y-condiciones"
      style={{ margin: "0 0 0 -12px" }}
    >
      Términos y Condiciones *
    </Button>
  )
}