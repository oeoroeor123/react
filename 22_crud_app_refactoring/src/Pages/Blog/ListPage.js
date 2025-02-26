import React from 'react';
import { NavLink } from 'react-router-dom';
import ListComp from '../../Components/Blog/ListComp';

const ListPage = () => {
  return (
    <div>
      <h1>블로그 목록 페이지</h1>
      <NavLink to="/blog/regist"><button>블로그 등록</button></NavLink>
      <br/><br/>
      <ListComp/>
      {/* 서버로부터 목록을 가져와서 화면에 렌더링하는 작업은 ListComp 컴포넌트가 담당한다. */}
    </div>
  );
};

export default ListPage;