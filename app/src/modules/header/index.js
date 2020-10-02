import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';

function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/">
          <img className="logo" src={logo} alt="News Feed logo" />
        </Link>
      </div>
    </header>
  );
}

export default Header;