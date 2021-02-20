import request from 'superagent'
const acceptJsonHeader = { Accept: 'application/json' }
const rootUrl = '/api/v1'

export function getTasks () {
  return request.get(rootUrl + '/tasks')
    .then(res => {
      return res.body
    })
}

export function newTask(detail) {
  return request
    .post(rootUrl)
    .set(acceptJsonHeader)
    .send(detail)
    .then(res => res.body)
    .catch(logError)
}