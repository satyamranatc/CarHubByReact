import React from 'react'

import { BrowserRouter,Routes,Route } from 'react-router-dom'

import NavBar from "./Components/NavBar.jsx"

import Home from "./Pages/Home.jsx"
import Brands from "./Pages/Brands.jsx"


export default function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>

        <Routes>

          <Route path='/' element = {<Home/>} />
          <Route path='/brands' element = {<Brands/>} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}
