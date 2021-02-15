import request from 'superagent'

const baseUrl = '/api/v1/tasks'

export function getTasks () {
  return request
  .get(baseUrl)
  .then(res => {
    return res.body
  })
}