import request from '@/utils/request'

export function userListByPage(params) {
  return request({
    url: '/user/list',
    method: 'get',
    params
  })
}
