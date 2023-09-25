import React from 'react';
import logo from '../../assets/logo.svg';
import '../../styles/Header/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <a href="/">
        <img src={logo} alt="Logo de la aplicación" /></a>
      </div>
      <nav className="nav">
        <ul>
          <li><a href="/productos">Colecciones</a></li>
          <li><a href="/productos">Inspiración</a></li>
          <li><a href="/productos">Andila Labs</a></li>
          <li><a href="/productos">Origins</a></li>
        </ul>
      </nav>
    </header>
    
  );
}

export default Header;
