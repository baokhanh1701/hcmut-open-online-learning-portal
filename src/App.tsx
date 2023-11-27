import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import {AdminRoute, GuestRoute, LecturerRoute, StudentRoute, SuperAdminRoute} from './routes';
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'


function App() {
  return (
    <>
      <Suspense fallback={null}>
          <Routes>
            <Route path='/admin/*' element={<AdminRoute />} />
            <Route path='/lecturer/*' element={<LecturerRoute />} />
            <Route path='/student/*' element={<StudentRoute />} />
            <Route path='/superadmin/*' element={<SuperAdminRoute />} />
            <Route path='*' element={<GuestRoute />} />
          </Routes>
      </Suspense>
    </>
  )
}

export default App
