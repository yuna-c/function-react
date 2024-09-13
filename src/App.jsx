import GlobalStyle from './GlobalStyle' // 글로벌 스타일 파일 경로
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Nav from './components/common/nav/Nav'
import Line from './components/pages/line/Line'
import LineRefactoring from './components/pages/lineRefactoring/LineRefactoring'
import HoverText from './components/pages/hoverText/HoverText'
import ImageHover from './components/pages/imageHover/ImageHover'
import HoverInImage from './components/pages/hoverInImage/HoverInImage'
import ImageGrid from './components/pages/hoverInImage/ImageGrid'
import LocalStorageInput from './components/pages/localStorageInput/localStorageInput'
import LocalStorageInputArray from './components/pages/localStorageInputArray/LocalstorageInputArray'
import ScrollLine from './components/pages/scrollLine/ScrollLine'

const App = () => {
  return (
    <div id="wrap">
      <GlobalStyle /> {/* 글로벌 스타일을 전체 앱에 적용 */}
      <BrowserRouter>
        <Nav />

        <Routes>
          <Route index path="/" element={<div></div>} />
          <Route path="/line" element={<Line />} />
          <Route path="/lineRefactoring" element={<LineRefactoring />} />
          <Route path="/scrollLine" element={<ScrollLine />} />
          <Route path="/hoverText" element={<HoverText />} />
          <Route path="/imageHover" element={<ImageHover />} />
          <Route path="/hoverInImage" element={<HoverInImage />} />
          <Route path="/imageGrid" element={<ImageGrid />} />
          <Route path="/localStorageInput" element={<LocalStorageInput />} />
          <Route path="/LocalStorageInputArray" element={<LocalStorageInputArray />} />
          {/* <Route path="/detail/:id" element={<Detail />} /> 
          <Route element={<UnauthRoute />}>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Route> 
          */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
