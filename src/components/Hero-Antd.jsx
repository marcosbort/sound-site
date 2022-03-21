import React from 'react'
import "./Hero-Antd.css"
import { Carousel, Button, Anchor } from 'antd';
import { StarFilled } from '@ant-design/icons';

import logoSound from "../images/logo-sound.png"
// import logoSound from "../images/logo-sound-white.png"

export const AppHero = () => {
  
  return (
    <div id='home' className='heroBlock'>
      <Carousel autoplay>
        <div className="block-1"/>
        <div className="block-2"/>
        <div className="block-3"/>
        <div className="block-4"/>
        <div className="block-5"/>
        <div className="block-6"/>
      </Carousel>
      
      <div className="fusion-layer"></div>
        
      <div className="container-fluid">
        <div className="content">
          <img src={logoSound} alt="logo-sound" />
          <h3>sound</h3>
          <p>Estudio de grabación</p>
          <p className='stars-icon'>
            <StarFilled />
            <StarFilled />
            <StarFilled />
            <StarFilled />
            <StarFilled />
          </p>
          <Anchor className='btn-hero-about' affix={false}>
            <Anchor.Link href="#about" title="Leer más" />
          </Anchor>
        </div>
      </div>
    </div>
  )
}
