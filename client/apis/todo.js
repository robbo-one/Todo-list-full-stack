import request from 'superagent'

const rootUrl = '/api/v1'

export function getTodos () {
  return request.get(rootUrl + '/todos')
  .then(res => {
    return res.body
  })
}

export function addTodos (todos) {
  return request.post(rootUrl + '/todos')
  .send(todos)
  .then(res => {
    return res.body
  })
}

export function deleteTodos (id) {
  return request.delete(rootUrl + '/todos/' + id)
  .then(res => {
    return res.body
  })
}
