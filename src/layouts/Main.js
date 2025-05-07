import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import Dashboard from '../components/Dashboard'
import Pro_banner from '../components/Pro_banner'

const Main = () => {
  return (
    <div className="container-scroller">
      <Pro_banner />
      <Header />
      <div className="container-fluid page-body-wrapper">
        <Sidebar />
        <div className="main-panel">
          <Outlet />
          {/* <Dashboard /> */}
          <Footer /> 
        </div>
      </div>
    </div>
  )
}

export default Main
