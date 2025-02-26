import React from 'react';
import { NavLink } from 'react-router-dom';

const NaviBar = () => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/blog/list">블로그</NavLink></li>
        <li><NavLink to="/blog/list">블로그</NavLink></li>
        <li><NavLink to="/blog/list">블로그</NavLink></li>
      </ul>
    </nav>
  );
};

export default NaviBar;