import React from 'react';
import { useNavigate } from 'react-router-dom';

const CustomNavigate = () => {

  // useNavigate() : 페이지 이동 Hooks
  const navigate = useNavigate();

  // 목록 페이지로 이동
  const goToListPage = () => {
    navigate({
      pathname: `/blog/list`,
    })
  }

  // 상세 페이지로 이동
  const goToDetailPage = (id) => {
    navigate({
      pathname: `/blog/detail/${id}`,
    })
  }

  // 편집 페이지로 이동
  const goToEditPage = (id) => {
    navigate({
      pathname: `/blog/edit/${id}`,
    })
  }


  return { goToListPage, goToDetailPage, goToEditPage }

};

export default CustomNavigate;