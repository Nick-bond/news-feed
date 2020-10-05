import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <Link to="/">
          <img className="logo" src={logo} alt="News Feed logo" />
        </Link>
      </div>
      <div className="footer-description">
        <div className="footer-description_inner">©News Feed 2020</div>
      </div>
    </footer>
  );
}

export default Footer;