import {BrowserRouter, Routes, Route} from 'react-router-dom'; 
import BasicLayout from './Layouts/BasicLayout';
import IndexPage from './Pages/IndexPage';
import ListPage from './Pages/Blog/ListPage';
import RegistPage from './Pages/Blog/RegistPage';

function App() {
  return (
   <>
   {/* 기본 구성 꼭 지켜서 코드 짜기 */}
    <BrowserRouter>
      <Routes>
        <Route element={<BasicLayout/>}>
          {/* BasicLayout의 Outlet자리에 보여지고자 하는 모든 페이지들을 여기에 넣는다. */}
          <Route path="/"            element={<IndexPage/>}></Route> 
          <Route path="/blog/list"   element={<ListPage/>}></Route>
          <Route path="/blog/regist" element={<RegistPage/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
