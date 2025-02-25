import {BrowserRouter, Routes, Route} from 'react-router-dom'; 
import BasicLayout from './Layouts/BasicLayout';
import IndexPage from './Pages/IndexPage';

function App() {
  return (
   <>
   {/* 기본 구성 꼭 지켜서 코드 짜기 */}
    <BrowserRouter>
      <Routes>
        <Route element={<BasicLayout/>}>
          {/* BasicLayout의 Outlet자리에 IndexPage가 보여진다. */}
          <Route path="/" element={<IndexPage/>}></Route> 
        </Route>
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
