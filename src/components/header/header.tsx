import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <nav>
      <ul className="nav">
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/posts'>Posts</NavLink></li>
        <li><NavLink to='/contacts'>Contacts</NavLink></li>
      </ul>
    </nav>
  </header>
);

export default Header;
