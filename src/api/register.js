import request from '@/utils/request'

// 用户注册
export function register(username, password,name,gender,phone,email) {
  const data = {
    username,
    password,
    name,
    gender,
    phone,
    email,
    
  }
  return request({
    url: '/auth/register',
    method: 'post',
    data: data
  })
}