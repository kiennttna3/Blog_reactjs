import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PublicRoutes = () => {
    // Kiểm tra xem người dùng đã đăng nhập hay chưa bằng cách kiểm tra token trong localStorage
    let token = localStorage.getItem('access_token') || false
  return (
    // Nếu chưa đăng nhập, cho phép truy cập vào các route con (Outlet)
    // Nếu đã đăng nhập, chuyển hướng đến trang chính ("/")
    !token ? <Outlet /> : <Navigate to={"/"} />
  )
}

export default PublicRoutes
