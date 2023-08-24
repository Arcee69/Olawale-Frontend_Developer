import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

const LandingPageLayout = () => {
  return (
    <div className='overflow-x-hidden '>
      <div className='w-full relative  bg-BLUE-_100 py-2 flex'>
        <Header />
      </div>
      <div className=''>
        <Outlet />
      </div>
      <div className="w-full relative">
        <Footer />
      </div>
    </div>
  )
}

export default LandingPageLayout