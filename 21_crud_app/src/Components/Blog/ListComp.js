import axios from 'axios';
import {useEffect, useState } from 'react'; // 처음 렌더링 후, 의존 배열이 바뀌고 난 후 useEffect이 실행된다.
import { useSearchParams } from 'react-router-dom';


const ListComp = () => {

  const [ serverData, setServerDate] = useState({
    status: 0,
    message: '',
    results: {
      blogList: []
    }
  });

  const [ queryParmas ] = useSearchParams();
  // 모든 queryString은 반환 타입이 문자열임으로 queryParmas.get('page')를 정수로 바꿔줌(parseInt())
  const page = !queryParmas.get('page') ? 1: parseInt(queryParmas.get('page'));
  const size = !queryParmas.get('size') ? 3: parseInt(queryParmas.get('size'));
  const sort = !queryParmas.get('sort') ? 'id,desc': queryParmas.get('sort'); // sort = column,desc

  useEffect (() => {
    const getBlogList = async() => {
      const response = await axios({
        url: 'http://localhost:8080/blogs',
        method: 'get',
        params: {
          page: page,
          size: size,
          sort: sort
        }
      });
      const jsonData = await response.data;
      setServerDate(jsonData);
    }
    getBlogList();
  }, [page, size, sort]); // 의존배열, page, size, sort가 변경되면 리 렌더링한다. (페이지가 바뀌니 렌더링이 다시 필요하다.)

  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <td>제목</td>
            <td>작성일시</td>
          </tr>
        </thead>
        <tbody>
          {
            serverData.results.blogList.map(blog => 
              <tr key={blog.id}>
                <td>{blog.title}</td>
                <td>{blog.createDt}</td>
              </tr>
            ) // 블로그 리스트에 저장된 블로그를 하나씩 꺼내서 블로그라고 부르고 tr에 key를 지정해 식별자 역할을 넣고 td에 제목와 작성일자 내용으로 화면을 구성한다.
          }
        </tbody>
      </table>
    </div>
  );
};

export default ListComp;