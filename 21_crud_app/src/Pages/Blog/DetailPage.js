import React from 'react';
import DetailComp from '../../Components/Blog/DetailComp';
import { useParams } from 'react-router-dom';

const DetailPage = () => {

  // 경로 변수(Path Variable)를 처리하는 useParams() 지정
  const { id } = useParams();

  return (
    <div>
      <h1>블로그 상세 페이지 ({id})</h1>
      <DetailComp id={id} /> {/* 사용하려는(연결하려는) 컴포넌트를 적는다. */}
    </div>
  );
};

export default DetailPage;