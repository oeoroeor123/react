import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getBlogList } from '../../api/blogAPI';
import CustomNavigate from '../../hooks/CustomNavigate';

const ListComp = () => {

  // 페이지 이동 함수(함수 호출 결과를 객체로 바꿔서 사용한다.)
  const { goToDetailPage } = CustomNavigate();

  // serverData 객체 선언(서버로부터 가져온 데이터를 저장한다.)
  const [serverData, setServerData] = useState({
    status: 0,
    message: '',
    results: {
      blogList: []
    }
  })

  // useSearchParams() : Query String(쿼리 스트링)으로 전달되는 요청 파라미터 처리
  const [ queryParams ] = useSearchParams();
  // 모든 queryString은 반환 타입이 문자열임으로 queryParmas.get('page')를 정수로 바꿔줌(parseInt())
  const page = !queryParams.get('page') ? 1 : parseInt(queryParams.get('page'));  // 요청 파라미터 page가 없으면 page=1 사용
  const size = !queryParams.get('size') ? 2 : parseInt(queryParams.get('size'));  // 요청 파라미터 size가 없으면 size=2 사용
  const sort = !queryParams.get('sort') ? 'id,desc' : queryParams.get('sort');    // 요청 파라미터 sort가 없으면 sort=id,desc 사용

  // useEffect() : 최초 렌더링 시 또는 page/size/sort 중 하나가 변하면 블로그 목록 조회
  useEffect(() => {
    getBlogList({ page, size, sort })
      .then(jsonData => { // then 메소드 호출해서 결과를 받아옴, 이 경우엔 async/await 보다 then 메소드를 쓰는 것이 용이함
        setServerData(jsonData);
      })
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
            serverData.results.blogList.length === 0 ?
            <></> :
            serverData.results.blogList.map(blog => 
              <tr key={blog.id}>
                <td>
                  {/* 일반 함수(화살표 함수)를 사용해 blog.id를 전달하여 상세 페이지를 연결한다.(이벤트 핸들러는 이벤트 객체만 전달 가능) */}
                  <span onClick={() => { goToDetailPage(blog.id) }}>{blog.title}</span>
                </td>
                <td>{blog.createDt.replace('T', ' ')}</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  );

};

export default ListComp;