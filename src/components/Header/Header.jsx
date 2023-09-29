import React from 'react';
import { FormattedMessage } from 'react-intl';
import logo from '../../assets/logo.svg';
import '../../styles/Header/Header.css';

function Header() {

  return (
      <div className="header">
        <div className="logo">
          <a href="/">
            <img src={logo} alt="Logo de la aplicación" />
          </a>
        </div>
        <nav className="primary menu">
          <ul>
            <li>
              <FormattedMessage id="collections" />
            </li>
            <li>
              <FormattedMessage id="inspiration" />
            </li>
            <li>
              <FormattedMessage id="andinaLabs" />
            </li>
            <li>
              <FormattedMessage id="origins" />
            </li>
          </ul>
        </nav>

        <nav className="secondary menu">
          <ul>
            <li>
              <FormattedMessage id="aboutUs" />
            </li>
            <li>
              <FormattedMessage id="theAlpaca" />
            </li>
            <li>
              <FormattedMessage id="socialResponsibility" />
            </li>
            <li>
              <FormattedMessage id="contactUs" />
            </li>
            <li>
              <FormattedMessage id="blog" />
            </li>
          </ul>
        </nav>
      </div>
  );
}

export default Header;