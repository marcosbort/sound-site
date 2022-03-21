import React from 'react'
import "antd/dist/antd.css"
import "./About-Antd.css"
import { Row, Col } from 'antd';

import image1 from "../images/circle-01.png"
import image2 from "../images/circle-02.png"
import image3 from "../images/circle-03.png"
import image4 from "../images/circle-04.png"
import image5 from "../images/circle-05.png"
import image6 from "../images/circle-06.png"
import image7 from "../images/circle-07.png"

export const AppAbout = () => {
  
  return (
    <div id="about" className='block aboutBlock'>
      <div className="container-fluid">

        <div className="titleHolder">
          <h2>Podés contar con Nosotros</h2>
          <p>Acompañamos tu Producción en cada una de las etapas</p>
        </div>

        <p className="contentHolder">
        Nuestras salas presentan un diseño de acústica variable, equipadas con la gama alta de micrófonos Shure, Sennheiser y Neumann, y la legendaria mesa digital Yamaha Cl5, la consola tope de línea de la Serie Cl Digital Mixing Consoles. También cuentan con amplificadores de primeras marcas, instrumentos y un completo set de percusión con la opción de aislación acústica. 
        Grabá tu música con 64 canales pre-programados y en simultáneo.<br />En Sound©, la música te escucha a vos.
        </p>

        <Row gutter={[16, 16]}>
          <Col xs={20} sm={12} md={8}> 
            <div className="content">
              <div className="icon">
              <img src={image3} alt="imagen" />
              </div>
              <h3>Recording</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio hic, est eveniet magnam vero error? Sapiente quam ducimus enim inventore.
              </p>
            </div>
          </Col>

          <Col xs={20} sm={12} md={8}> 
            <div className="content">
              <div className="icon">
                <img src={image5} alt="imagen" />
              </div>
              <h3>Edit and Mix</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio hic, est eveniet magnam vero error? Sapiente quam ducimus enim inventore.
              </p>
            </div>
          </Col>

          <Col xs={20} sm={12} md={8}> 
            <div className="content">
              <div className="icon">
                <img src={image4} alt="imagen" />
              </div>
              <h3>Mastering</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio hic, est eveniet magnam vero error? Sapiente quam ducimus enim inventore.
              </p>
            </div>
          </Col>
        </Row>

      </div>
    </div>
  )
}

/* 
<Row gutter={[10,10]} justify="center">
  <Col xs={20} sm={12} md={8} lg={6} xl={5} xxl={4}><div className='col-1'> Responsive </div></Col>
  <Col xs={20} sm={12} md={8} lg={6} xl={5} xxl={4}><div className='col-1'> Responsive </div></Col>
  <Col xs={20} sm={12} md={8} lg={6} xl={5} xxl={4}><div className='col-1'> Responsive </div></Col>
  <Col xs={20} sm={12} md={8} lg={6} xl={5} xxl={4}><div className='col-1'> Responsive </div></Col>
</Row> 
*/