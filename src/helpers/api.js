import axios from 'axios'

// Đây là hàm được sử dụng để thực hiện các yêu cầu API đến máy chủ backend.
export default function requestApi(endpoint, method, body, responseType = 'json') {
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };

  // Tạo một instance của axios với các header đã định nghĩa ở trên.
  // Instance này sẽ được sử dụng để thực hiện các yêu cầu HTTP đến máy chủ backend.
  // Bạn có thể tùy chỉnh các header này theo nhu cầu của mình.
  const instance = axios.create({ headers });

  // Thêm một interceptor vào instance để xử lý các yêu cầu trước khi chúng được gửi đi.
  // Interceptor này sẽ được gọi mỗi khi một yêu cầu được thực hiện.
  instance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('access_token'); // Lấy token từ localStorage
      if(token) {
        config.headers['Authorization'] = `Bearer ${token}`; // Thêm token vào header Authorization
      }
      return config; // Trả về config đã được chỉnh sửa
    },
    (error) => {
      return Promise.reject(error); // Nếu có lỗi xảy ra trong quá trình cấu hình yêu cầu, trả về lỗi đó
    }
  )

  // Thêm một interceptor vào instance để xử lý các phản hồi từ máy chủ.
  // Interceptor này sẽ được gọi mỗi khi một phản hồi được nhận từ máy chủ.
  instance.interceptors.response.use(
    (response) => {
      return response; // Trả về phản hồi nếu yêu cầu thành công
    },
    async (error) => {
      const originalConfig = error.config; // Lấy cấu hình của yêu cầu gốc
      console.log("Access token expired")
      if (error.response && error.response.status === 419) {
        try {
          console.log("call refresh token api")
          const result = await instance.post(`${process.env.REACT_APP_API_URL}/auth/refresh-token`, {
            refresh_token: localStorage.getItem('refresh_token') // Lấy refresh token từ localStorage
          })

          const { access_token, refresh_token } = result.data; // Lấy access token và refresh token từ phản hồi
          localStorage.setItem('access_token', access_token); // Lưu access token mới vào localStorage
          localStorage.setItem('refresh_token', refresh_token); // Lưu refresh token mới vào localStorage
          originalConfig.headers['Authorization'] = `Bearer ${access_token}`; // Cập nhật header Authorization với access token mới

          return instance(originalConfig); // Thực hiện lại yêu cầu gốc với access token mới
        } catch (error) {
          if (error.response && error.response.status === 400) {
            // Nếu refresh token không hợp lệ, xóa cả access token và refresh token khỏi localStorage
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
            window.location.href = '/login'; // Chuyển hướng người dùng đến trang đăng nhập
          }
          return Promise.reject(error); // Nếu có lỗi khác xảy ra, trả về lỗi đó
        }
      }
      return Promise.reject(error); // Nếu không có lỗi nào xảy ra, trả về lỗi đó
    }
  )

  // Trả về một promise với các thông tin yêu cầu HTTP được gửi đến máy chủ backend.
  return instance.request({
    method: method,
    url: `${process.env.REACT_APP_API_URL}${endpoint}`,
    data: body,
    responseType: responseType,
  });
}