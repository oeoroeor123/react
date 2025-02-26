import { useState } from 'react';
import { registBlog } from '../../api/blogAPI';
import CustomNavigate from '../../hooks/CustomNavigate';

const RegistComp = () => {

  // 페이지 이동 함수
  const { goToListPage } = CustomNavigate();

  // blog 객체 선언 (등록 시 title, content만 전달)
  const [ blog, setBlog ] = useState({
    title: '',
    content: '',
  });

  // onChangeHandler() : 사용자가 title, content에 입력한 내용을 blog 객체에 저장
  const onChangeHandler = e => {
    setBlog({
      ...blog,                           // 기존의 blog 내용은 그대로 사용한다. 
      [e.target.name]: e.target.value,   // title, content가 새롭게 들어온다면 현재 작성한 내용으로 덮어쓰기한다.
    })
  }

  // onClickHandler() : 블로그 저장
  const onClickHandler = async () => {
    registBlog(blog)
      .then(jsonData => {
        alert(jsonData.message);
        goToListPage();
      })
  }

  return (
    <div>
      <input type="text" name="title" value={blog.title} placeholder="제목" onChange={onChangeHandler}/>
      <br/>
      <input type="text" name="content" value={blog.content} placeholder="내용" onChange={onChangeHandler}/>
      <br/>
      <button onClick={onClickHandler}>등록하기</button>
    </div>
  );

};

export default RegistComp;