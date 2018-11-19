import request from '@/utils/request'

export function userListByPage() {
  return request({
    url: '/user/list',
    method: 'get'
  })
}
