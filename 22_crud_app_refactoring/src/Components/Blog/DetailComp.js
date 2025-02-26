import { useState, useEffect } from 'react';
import { getBlog } from '../../api/blogAPI';
import CustomNavigate from '../../hooks/CustomNavigate';

// props(id) 값 받기
const DetailComp = ({ id }) => {

  // 페이지 이동 함수
  const { goToEditPage, goToListPage } = CustomNavigate();

  // blog 객체 선언
  const [blog, setBlog] = useState({
    id: 0,
    title: '',
    content: '',
    createDt: '',
  });

  // useEffect() : 최초 렌더링 시 또는 id가 변하면 블로그 상세 조회
  useEffect(() => {
    getBlog(id)
      .then(jsonData => {
        setBlog(jsonData.results.blog);
      })
  }, [id]);

  // div() : <div> 태그 반환 함수
  const div = (label, value) => {
    return (
      <div style={{display: 'flex'}}>
        <div style={{width: '100px', color: 'blue'}}>{label}</div>
        <div style={{width: '500px'}}>{value}</div>
      </div>
    )
  }

  return (
    <div>
      { div('ID', blog.id) }
      { div('TITLE', blog.title) }
      { div('CONTENT', blog.content) }
      { div('CREATE_DT', blog.createDt.replace('T', ' ')) }
      <div>
        <button onClick={() => { goToEditPage(blog.id) }}>편집하기</button>
        <button onClick={() => { goToListPage() }}>목록보기</button>
      </div>
    </div>
  );
};

export default DetailComp;