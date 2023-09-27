import React from 'react';
import '../../styles/Footer/Footer.css';
import logo from '../../assets/logo.svg'

function Footer() {
  return (
    <footer className="white footer">
      <a href="https://www.michell.com.pe/"  className="logo">
        <img src={logo} alt="Proyecto Nuevo"/>
      </a>
    </footer>
  );
}

export default Footer;