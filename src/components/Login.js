import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import requestApi from '../helpers/api'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import * as actions from '../layouts/redux/actions'


const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    // Khai báo các state để lưu trữ dữ liệu nhập vào từ người dùng
    // và các lỗi kiểm tra tính hợp lệ của form
    const [loginData, setLoginData] = useState({})
    const [formErrors, setFormErrors] = useState({})
    const [isSubmited, setIsSubmitted] = useState(false)

    // Hàm xử lý sự kiện khi người dùng thay đổi giá trị trong các trường nhập liệu
    const onChange = (e) => {
        let target = e.target
        setLoginData({
            ...loginData,
            [target.name]: target.value
        })
    }

    // Hàm kiểm tra tính hợp lệ của form khi người dùng thay đổi giá trị trong các trường nhập liệu
    useEffect(() => {
        if (isSubmited) {
            validateForm()
        }
    }, [loginData])

    // Hàm kiểm tra tính hợp lệ của form
    const validateForm = () => {
        let isValid = true
        const errors = {}
        if (loginData.email === undefined || loginData.email === "") {
            errors.email = "Nhập email"
        } else {
            let valid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(loginData.email)
            if (!valid) {
                errors.email = "Email không hợp lệ"
            }
        }

        if (loginData.password === undefined || loginData.password === "") {
            errors.password = "Nhập mật khẩu"
        }

        // Kiểm tra xem có lỗi nào không
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors)
            isValid = false
        } else {
            setFormErrors({})
        }
        // Nếu không có lỗi nào, trả về true
        return isValid
    }

    // Hàm xử lý sự kiện khi người dùng nhấn nút Đăng nhập
    const onSubmit = (e) => {
        // Ngăn chặn hành vi mặc định của form
        e.preventDefault()

        console.log(loginData)

        // Kiểm tra tính hợp lệ của form
        let Valid = validateForm()
        if (Valid) {
            console.log("Đăng nhập thành công")
            dispatch(actions.controlLoading(true))
            // Gọi API để thực hiện đăng nhập
            // Nếu đăng nhập thành công, lưu token vào localStorage và chuyển hướng đến trang chính
            requestApi('/auth/login', 'POST', loginData).then((res) => {
                console.log(res)
                // Lưu token vào localStorage
                localStorage.setItem("access_token", res.data.access_token)
                localStorage.setItem("refresh_token", res.data.refresh_token)
                dispatch(actions.controlLoading(false))
                // Chuyển hướng đến trang chính ("/")
                navigate('/')
            }).catch((err) => {
                dispatch(actions.controlLoading(false))
                console.log(err)
                if (typeof err.response !== 'undefined') {
                    if (err.response.status !== 201) {
                        toast.error(err.response.data.message, {
                            position: "top-right"
                        })
                    } else {
                        toast.error("Đăng nhập không thành công", {
                            position: "top-right"
                        })
                    }
                }
            })
        } else {
            console.log("Đăng nhập không thành công")
        }

        // Đặt trạng thái isSubmited thành true để kích hoạt việc kiểm tra tính hợp lệ của form
        setIsSubmitted(true)
    }

    
    return (
        <div className="container-scroller">
            <div className="container-fluid page-body-wrapper full-page-wrapper">
                <div className="content-wrapper d-flex align-items-center auth px-0">
                    <div className="row w-100 mx-0">
                        <div className="col-lg-4 mx-auto">
                            <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                                <div className="brand-logo">
                                    <img src="../../assets/images/logo.svg" alt="logo" />
                                </div>
                                <h4>
                                    Hello! let's get started
                                </h4>
                                <h6 className="fw-light">
                                    Sign in to continue.
                                </h6>
                                <form className="pt-3" onSubmit={onSubmit}>
                                    <div className="form-group">
                                        <input type="email" name="email" className="form-control form-control-lg" onChange={onChange} id="exampleInputEmail1" placeholder="Email" />
                                        {formErrors.email && <span className="text-danger">{formErrors.email}</span>}
                                    </div>
                                    <div className="form-group">
                                        <input type="password" name="password" className="form-control form-control-lg" onChange={onChange} id="exampleInputPassword1" placeholder="Password" />
                                        {formErrors.password && <span className="text-danger">{formErrors.password}</span>}
                                    </div>
                                    <div className="mt-3 d-grid gap-2">
                                        <button className="btn btn-block btn-primary btn-lg fw-medium auth-form-btn">
                                            SIGN IN
                                        </button>
                                    </div>
                                    <div className="my-2 d-flex justify-content-between align-items-center">
                                        <div className="form-check">
                                            <label className="form-check-label text-muted">
                                                <input type="checkbox" className="form-check-input" /> 
                                                Keep me signed in 
                                            </label>
                                        </div>
                                        <a href="#" className="auth-link text-black">
                                            Forgot password?
                                        </a>
                                    </div>
                                    <div className="mb-2 d-grid gap-2">
                                        <button type="button" className="btn btn-block btn-facebook auth-form-btn">
                                            <i className="ti-facebook me-2"></i>
                                            Connect using facebook 
                                        </button>
                                    </div>
                                    <div className="text-center mt-4 fw-light"> 
                                        Don't have an account? 
                                        <Link to={"/register"} className="text-primary">
                                            Create
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* content-wrapper ends */}
            </div>
        </div>
    )
}

export default Login
