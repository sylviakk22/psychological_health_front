import request from '@/utils/request'

// 用户注册
export function edit(username, password,name,gender,phone,email) {
  const data = {
    username,
    password,
    name,
    gender,
    phone,
    email,
    
  }
  return request({
    url: '/auth/edit',
    method: 'post',
    data: data
  })
}

export function editPwd(oldPassword, newPassword) {
  const data = {
    oldPassword,
    newPassword
  }
  return request({
    url: '/auth/editPwd',
    method: 'post',
    data: data
  })
}