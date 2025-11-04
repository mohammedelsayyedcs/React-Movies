import { useState } from 'react'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import { Route, Routes } from 'react-router-dom'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home.jsx'

function App() {

  return (
    <>
      <Header />
      <Home />
      <Routes>
        <Route path='' element='' />
      </Routes>

      <Footer />
    </>
  )
}

export default App
