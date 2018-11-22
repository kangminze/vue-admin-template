import request from '@/utils/request'

export function userListByPage(params) {
  return request({
    url: '/user/list',
    method: 'get',
    params
  })
}

export function saveUser(data) {
  return request({
    url: '/user/create',
    method: 'post',
    data: data
  })
}

export function deleteUser(id) {
  return request({
    url: '/user/' + id + '/delete',
    method: 'delete'
  })
}
