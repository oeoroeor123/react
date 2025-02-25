import React from 'react';
import Header from './Header';
import NaviBar from './NaviBar';
import {Outlet} from 'react-router-dom'; // 본문을 채우는 영역, 주소 연결 시 보여주려고 하는 컴포넌트들이 해당 자리에 배치되어 들어온다.
import Footer from './Footer';

const BasicLayout = () => {
  return (
    <div>
      <Header/>
      <NaviBar/>
      <Outlet/>
      <Footer/>
    </div>
  );
};

export default BasicLayout;