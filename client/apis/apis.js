import request from 'superagent'
const acceptJsonHeader = { Accept: 'application/json' }
const rootUrl = '/api/v1'

export function getTasks () {
  return request.get(rootUrl + '/tasks')
  .then(res => {
    return res.body
  })
}

export function addTask (detail) {
  console.log('add a task')
  return request
  .post(rootUrl + '/tasks')
  .set(acceptJsonHeader)
  .send(detail)
  .then(res => res.body)
  .catch(err => console.log(err.message))
  }

/*
ADD
UPDATE
DELETE
*/