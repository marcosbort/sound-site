import React from 'react'
import "antd/dist/antd.css"
import { Card } from 'antd';
import { Row, Col } from "antd"

import image1 from "../images/card-01.jpg"
import image2 from "../images/card-04.jpg"
import image3 from "../images/card-08.jpg"
import image4 from "../images/card-09.jpg"
import image5 from "../images/card-06.jpg"
import image6 from "../images/card-03.jpg"
import image7 from "../images/card-07.jpg"
import image8 from "../images/card-08.jpg"

export const AppCards = () => {

  const { Meta } = Card;

  return (

    <div id='equipment' className="block cardsBlock bgGray">
      <div className="container-fluid">

        <div className="titleHolder">
          <h2>Audio Hi-Res</h2>
          <p>Salas completamente equipadas</p>
        </div>

        <Row gutter={[24, 24
        ]}>
          
          <Col xs={20} sm={12} md={8}>
            <Card
              hoverable
              cover={<img alt="example" src={image1} />}
            >
              <Meta title="Equipo Técnico" description="Soporte y asistencia" />
            </Card>
          </Col>

          <Col xs={20} sm={12} md={8}>
            <Card
              hoverable
              cover={<img alt="example" src={image2} />}
            >
              <Meta title="Pre-Sala de monitoreo" description="SUM pre producción" />
            </Card>
          </Col>

          <Col xs={20} sm={12} md={8}>
            <Card
              hoverable
              cover={<img alt="example" src={image3} />}
            >
              <Meta title="Sala Acústica" description="Con piano Yamaha GH1 " />
            </Card>
          </Col>

          <Col xs={20} sm={12} md={8}>
            <Card
              hoverable
              cover={<img alt="example" src={image4} />}
            >
              <Meta title="Yamaha Cl5" description="Digital Mixing Consoles" />
            </Card>
          </Col>

          <Col xs={20} sm={12} md={8}>
            <Card
              hoverable
              cover={<img alt="example" src={image5} />}
            >
              <Meta title="Micrófonos Condenser" description="Tope de gama" />
            </Card>
          </Col>

          <Col xs={20} sm={12} md={8}>
            <Card
              hoverable
              cover={<img alt="example" src={image6} />}
            >
              <Meta title="Micro Sala Vocal" description="Con aislación acústica" />
            </Card>
          </Col>

        </Row>
      </div>
    </div>
  )
}



