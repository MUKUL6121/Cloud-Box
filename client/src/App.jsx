import Nav from './components/Nav.jsx'
import './App.css'
// import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import Home from './components/Home.jsx';
import Files from './components/Files.jsx';
import Form from './components/Form';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <div className='p-5' style={{ width: "100%" }}>
        <Nav className="w-100"></Nav>
      </div>
      <div>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<></>}></Route>
          <Route path="/files" element={<Files />} />
          <Route path="/Form" element={<Form />} />
        </Routes>
      </div>
    </div>
  )
}


export default App
