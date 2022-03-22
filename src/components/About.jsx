import React from "react";
import "antd/dist/antd.css";
import "./About.css";
import { Row, Col } from 'antd';

import image3 from "../images/circle-03.png";
import image4 from "../images/circle-04.png";
import image5 from "../images/circle-05.png";

export const About = () => {
  
  return (
    <div id="about" className="block about-block">
      <div className="container-fluid">

        <div className="title-holder">
          <h2>Podés contar con Nosotros</h2>
          <p>Acompañamos tu Producción en cada una de las etapas</p>
        </div>

        <p className="content-holder">
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