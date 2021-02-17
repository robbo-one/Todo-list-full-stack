import request from 'superagent'

const rootUrl = '/api/v1'

export function getTasks () {
  return request.get(rootUrl + '/tasks')
    .then(res => {
      return res.body
    })
}