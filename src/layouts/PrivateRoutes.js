import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoutes = () => {
    // Kiểm tra xem người dùng đã đăng nhập hay chưa bằng cách kiểm tra token trong localStorage
    let token = localStorage.getItem('access_token') || false
  return (
    // Nếu đã đăng nhập, cho phép truy cập vào các route con (Outlet)
    // Nếu chưa đăng nhập, chuyển hướng đến trang đăng nhập
    token ? <Outlet /> : <Navigate to="/login" />
  )
}

export default PrivateRoutes
