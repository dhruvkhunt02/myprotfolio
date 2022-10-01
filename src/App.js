import './App.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './Pages/Nav';
import Home from './Pages/Home'
// import NoPage from './Pages/NoPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/myprotfolio/about' element={<About />} />
          <Route path='/myprotfolio/protoflio' element={<Protoflio />} />
          <Route path='/myprotfolio/contact' element={<Contact />} />
          <Route path='/myprotfolio/blog' element={<Blog />} /> */}
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;