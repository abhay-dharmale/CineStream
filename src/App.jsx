import Home from './components/Home'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Loading from './components/Loading'
import Trending from './components/Trending'
import Popular from './components/Popular'
import Movies from './components/Movies'
import TvShows from './components/TvShows'
import People from './components/People'
import { SideNavProvider } from './Context/SideNavContext'

const App = () => {
  return (
  <SideNavProvider>
    <div className='w-screen h-screen bg-[#1F1E24] flex overflow-hidden'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/trending' element={<Trending />} />
        <Route path='/popular' element={<Popular />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/tvshows' element={<TvShows />} />
        <Route path='/people' element={<People />} />
      </Routes>
    </div>
  </SideNavProvider>
  )
}

export default App;