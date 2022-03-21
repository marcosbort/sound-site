import React from 'react';
import "./Footer-Antd.css"
import logoSound from "../images/logo-sound-02.png"

// import logoSound from "../images/logo-sound-white.png"
import { BackTop, Layout } from 'antd';
import { GithubFilled, LinkedinFilled } from '@ant-design/icons';

export const AppFooter = () => {
  const { Footer } = Layout

  return (
    <Footer>
      <div className="container-fluid">
        <div className="footer-container">
          <div className="footer">
            {/* <div className="footer-logo">
            </div> */}
            <img className='logo-sound' src={logoSound} alt="logo-sound" />
            
            <div className="footer-contact">
              <span className="by">by</span>
              <span className='contact'>Marcos Bort <span className='copy'>&copy;</span></span>
              <a href="https://www.linkedin.com/in/marcosbort" target="_blanck"><LinkedinFilled /></a>
              <a href="https://github.com/marcosbort" target="_blanck"><GithubFilled /></a>
            </div>
            <BackTop>
              <div className="goTop"><i className="fas fa-arrow-circle-up"></i></div>
            </BackTop>
          </div>
        </div>
      </div>
    </Footer>
  );
}