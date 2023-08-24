import React from 'react'
import { Route, Routes } from 'react-router-dom'

import LandingPageLayout from '../layouts'
import LandingPage from '../pages/landing'
import Error404 from '../pages/NotFound'

export default function Routers () {
  return (
    <>
        <Routes>
            <Route element={<LandingPageLayout />}>
                <Route path='/' element={<LandingPage />} />
            </Route>
            
            <Route path='/*' element={<Error404 />} />
        </Routes>
    </>
  )
}
