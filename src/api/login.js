import request from '@/utils/request'

// 用户登录
export function login(username, password) {
  const data = {
    username,
    password
  }
  return request({
    url: '/auth/login',
    method: 'post',
    data: data
  })
}


// 获取用户信息
export function getInfo() {
  return request({
    url: '/auth/profile/get',
    method: 'get'
  })
}