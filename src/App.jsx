import Home from "./Pages/Home"
import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from "./Pages/About"

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
