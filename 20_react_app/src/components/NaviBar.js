import React from 'react';
import { NavLink } from 'react-router-dom';

const NaviBar = () => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/blogs">블로그</NavLink></li>
        <li><NavLink to="/guestbooks">방명록</NavLink></li>
        <li><NavLink to="/stores">스토어</NavLink></li>
      </ul>
    </nav>
  );
};

export default NaviBar;