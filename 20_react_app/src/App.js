import { BrowserRouter, Route, Routes } from "react-router-dom";
import BasicLayout from "./layouts/BasicLayout";
import Main from "./pages/Main";
import Blog from "./pages/Blog";
import Guestbook from "./pages/Guestbook";
import Store from "./pages/Store";

// 파일명과 컴포넌트 이름은 통일시킨다.
// App 컴포넌트 안에 참고해야 할 다른 컴포넌트를 return 안에 명시하고, import한다. (import 유무 체크 필수!)
// 참고한 다른 컴포넌트의 내용은 해당 컴포넌트 파일에 코드로 명시한다.
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* 각 컴포넌트로 연결할 내용을 적는다. */}
          {/* SPA(Single Page Application) 방식으로, 상단과 하단은 동일하고 중간은 각 링크에 따라 그 내용이 달라지도록 처리한다. */}
          {/* 화면에 렌더링할 컴포넌트는 <BasicLayout/>이고, 이 <Route>의 자식(child)이 <BasicLayout/> 컴포넌트의 <Outlet/>에 나타납니다. */}
          <Route element={<BasicLayout/>}>
            {/* path="링크" element="{<컴포넌트/>}" */}
            {/* 요청 주소에 따라 화면에 렌더링할 컴포넌트를 선택합니다. */}
            <Route path="/" element={<Main/>}/>
            <Route path="/main" element={<Main/>}/>
            <Route path="/blogs" element={<Blog/>}/>
            <Route path="/guestbooks" element={<Guestbook/>}/>
            <Route path="/stores" element={<Store/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

// 아래 코드가 적혀있어야, 다른 파일에서 import가 가능하다.
export default App;
