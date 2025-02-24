import React from 'react';
import Header from '../components/Header';
import NaviBar from '../components/NaviBar';
import { Outlet } from 'react-router-dom'; // route의 자식을 연결한다, 주소 연결 시 보여주려고 하는 컴포넌트들이 해당 자리에 배치되어 들어온다.

const BasicLayout = () => {
  return (
    <>
      <Header />
      <NaviBar />
      <Outlet />
    </>
  );
};

export default BasicLayout;