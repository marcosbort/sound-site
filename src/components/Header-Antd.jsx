import React, { useState } from 'react';
import "./Header-Antd.css"
import { Anchor, Drawer, Button, Layout } from 'antd';
// import logoSound from "../images/logo-sound.png"
import { LoginForm } from './LogInModal-Antd';
// import logoSound from "../images/logo-sound-01.png"
import logoSound from "../images/logo-sound-01.png"

export const AppHeader = () => {
  
  const { Link } = Anchor
  const { Header } = Layout

  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  

  return (
    <Header>
      <div className="container-fluid">
        <div className="header">
          <img className='logo-sound' src={logoSound} alt="logo-sound" />

          <div className="mobileHidden">
            <Anchor targetOffset="64">
              <Link href="#home" title="Home" />
              <Link href="#about" title="Nosotros" />
              <Link href="#equipment" title="Equipos" />
              <Link href="#prices" title="Packs" />
              <Link href="#contact" title="Contacto" />
            </Anchor>
            <LoginForm />
          </div>
          
          <div className="mobileVisible">
          <Button type="primary" onClick={showDrawer}>
            <i className="fas fa-bars"></i>
          </Button>
          <Drawer
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            <Anchor targetOffset="64">
              <Link href="#home" title="Home" />
              <Link href="#about" title="Nosotros" />
              <Link href="#equipment" title="Equipos" />
              <Link href="#prices" title="Packs" />
              <Link href="#contact" title="Contacto" />
              <LoginForm className="login-mobile"/>
            </Anchor>
          </Drawer>
          
          </div>
        </div>
      </div>
    </Header>
  )
}
