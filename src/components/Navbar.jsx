import React, { useCallback, useState } from 'react';
import "./Navbar.css";
import { Anchor, Drawer, Button, Layout } from 'antd';
import { LoginModal } from './LoginModal';
import logoSound from "../images/logo-sound-01.png";

const { Link } = Anchor;
const { Header } = Layout;


export const Navbar = () => {
  
  const [visible, setVisible] = useState(false);

  const onOpen = useCallback(() => {
    setVisible(true);
  }, []);

  const onClose = useCallback(() => {
    setVisible(false);
  }, []);

  return (
    <Header>
      <div className="container-fluid">
        <div className="header">
          <img className='logo-sound' src={logoSound} alt="logo-sound" />

          <div className="mobile-hidden">
            <Anchor targetOffset="64">
              <Link href="#home" title="Home" />
              <Link href="#about" title="Nosotros" />
              <Link href="#equipment" title="Equipos" />
              <Link href="#prices" title="Packs" />
              <Link href="#contact" title="Contacto" />
            </Anchor>
            <LoginModal />
          </div>
          
          <div className="mobile-visible">
          <Button type="primary" onClick={onOpen}>
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
              <LoginModal className="login-mobile"/>
            </Anchor>
          </Drawer>
          
          </div>
        </div>
      </div>
    </Header>
  )
}
