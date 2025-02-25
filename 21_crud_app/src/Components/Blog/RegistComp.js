import {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegistComp = () => {

  const navigate = useNavigate(); // 화면 이동 시 사용한다.
  
  const initialBlog = {
    title: '',
    content: '',
  }

  const [blog, setBlog] = useState(initialBlog);

  const onChangeHandler = e => {
    setBlog({
      ...blog,                         // 기존의 blog 내용은 그대로 사용한다.
      [e.target.name]: e.target.value, // title, content가 새롭게 들어온다면, 현재 작성한 내용으로 덮어쓰기한다.
    })
  }

  const onClickHandler = async () => {
    const response = await axios({
      url: 'http://localhost:8080/blogs', // sprign boot에서 전달 받는 데이터로 8080
      method: 'post', // spring boot에서 사용한 mapping 방법
      data: blog, // state 값
    });
    const jsonData = await response.data; // 백단에서(sts에서) Map과 dto는 객체( {} )로 변환되어 넘어오고, list는 배열( [] )로 변환되어 넘어온다.
    alert(jsonData.message); // 백단에서(sts에서) 사용한 .message("블로그 등록 성공") 가져와서 사용한다.
    setBlog(initialBlog); // 입력이 끝나면 입력 데이터를 초기화한다.
    // useNavigate를 이용한 화면 이동 코드
    navigate({
      pathname: '/blog/list',
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