import React from 'react'
import { Outlet } from 'react-router-dom'
import { ScaleLoader } from 'react-spinners'
import { ToastContainer } from 'react-toastify'
import { useSelector } from "react-redux"


const override = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    textAlign: 'center',
    zIndex: 10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
}

const Layout = () => {
  const statusLoading = useSelector(state => state.globalLoading.status)
  return (
    <div>
      <ScaleLoader loading={ statusLoading } color="#17dfb5" cssOverride={ override } />
      <Outlet />
      <ToastContainer />
    </div>
  )
}

export default Layout
