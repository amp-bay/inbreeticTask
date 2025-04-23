import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          {/* <Route path="/about" element={<div>About</div>} />
          <Route path="/contact" element={<div>Contact</div>} /> */}
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App