import { useState } from 'react'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.min.css'
import { Route, Routes } from 'react-router-dom'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home.jsx'
import NowPlaying from './Components/NowPlaying/NowPlaying.jsx'
import Popular from './Components/Popular/Popular.jsx'
import Upcoming from './Components/Upcoming/Upcoming.jsx'
import TopRated from './Components/TopRated/TopRated.jsx'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} >
          <Route index element={<NowPlaying />} />
          <Route path='now-playing' element={<NowPlaying />} />
          <Route path='popular' element={<Popular />} />
          <Route path='upcoming' element={<Upcoming />} />
          <Route path='top-rated' element={<TopRated />} />
        </Route>
      </Routes>

      <Footer />
    </>
  )
}

export default App
