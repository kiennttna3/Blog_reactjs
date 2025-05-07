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

  // Trả về một promise với các thông tin yêu cầu HTTP được gửi đến máy chủ backend.
  return instance.request({
    method: method,
    url: `${process.env.REACT_APP_API_URL}${endpoint}`,
    data: body,
    responseType: responseType,
  });
}