import React from 'react'; // React에 들어 있는 모든 hooks을 사용하기 위한 import, 아래 처럼 {useState} 형식으로도 하나씩 빼서 사용 가능
import { NavLink } from 'react-router-dom';

const Header = () => {

  // const { useState } = React;
  return (
    <div>
      <NavLink to="/"><h1>Welcome!!</h1></NavLink>
    </div>
  );
};

export default Header;