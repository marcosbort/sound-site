import React from 'react';
import "antd/dist/antd.css";
import { Card } from 'antd';
import { Row, Col } from "antd";
import image1 from "../images/card-01.jpg";
import image2 from "../images/card-04.jpg";
import image3 from "../images/card-08.jpg";
import image4 from "../images/card-09.jpg";
import image5 from "../images/card-06.jpg";
import image6 from "../images/card-03.jpg";
import { ModalCard1 } from './equipment/ModalCard1';
import { ModalCard2 } from './equipment/ModalCard2';
import { ModalCard3 } from './equipment/ModalCard3';
import { ModalCard4 } from './equipment/ModalCard4';
import { ModalCard5 } from './equipment/ModalCard5';
import { ModalCard6 } from './equipment/ModalCard6';

const { Meta } = Card;


export const Equipment = () => {

  return (
    <div id='equipment' className="block cards-block bg-gray">
      <div className="container-fluid">

        <div className="title-holder">
          <h2>Audio Hi-Res</h2>
          <p>Salas completamente equipadas</p>
        </div>

        <Row gutter={[24, 24
        ]}>
          
          <Col xs={20} sm={12} md={8}>
            <Card
              hoverable
              style={{cursor: "default"}}
              cover={<img alt="example" src={image1}  />}
            >
              <Meta title="Equipo Técnico" description="" />
            <ModalCard1 />
            </Card>
          </Col>

          <Col xs={20} sm={12} md={8}>
            <Card
              hoverable
              style={{cursor: "default"}}
              cover={<img alt="example" src={image2} />}
            >
              <Meta title="Pre-Sala de monitoreo" description="" />
            <ModalCard2 />
            </Card>
          </Col>

          <Col xs={20} sm={12} md={8}>
            <Card
              hoverable
              style={{cursor: "default"}}
              cover={<img alt="example" src={image3} />}
            >
              <Meta title="Sala Acústica" description="" />
            <ModalCard3 />
            </Card>
          </Col>

          <Col xs={20} sm={12} md={8}>
            <Card
              hoverable
              style={{cursor: "default"}}
              cover={<img alt="example" src={image4} />}
            >
              <Meta title="Yamaha Cl5" description="" />
            <ModalCard4 />
            </Card>
          </Col>

          <Col xs={20} sm={12} md={8}>
            <Card
              hoverable
              style={{cursor: "default"}}
              cover={<img alt="example" src={image5} />}
            >
              <Meta title="Micrófonos Condenser" description="" />
            <ModalCard5 />
            </Card>
          </Col>

          <Col xs={20} sm={12} md={8}>
            <Card
              hoverable
              style={{cursor: "default"}}
              cover={<img alt="example" src={image6} />}
            >
              <Meta title="Micro Sala Vocal" description="" />
            <ModalCard6 />
            </Card>
          </Col>

        </Row>
      </div>
    </div>
  )
}



