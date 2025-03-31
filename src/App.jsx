import Home from "./Pages/Home"
import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from "./Pages/About"
import Services from "./Pages/Services"
import Products from "./Pages/Products"
import Testimonials from "./Pages/Testimonials"
import Contact from "./Pages/Contact"

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/services" element={<Services/>}></Route>
      <Route path="/products" element={<Products/>}></Route>
      <Route path="/testimonials" element={<Testimonials/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
