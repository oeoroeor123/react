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
    </div>
  );
};

export default ListPage;