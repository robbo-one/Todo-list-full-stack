import request from 'superagent'

const rootUrl = '/api/v1/todos'

export function getTodos () {
  return request.get(rootUrl)
    .then(res => res.body)
}

export function addNewTodo (newTodo) {
  return request.post(rootUrl)
    .send( { todo: newTodo} )
    .then(res => res.body)
    .catch(err => {
      console.log(err)
    })
}

export function delTodo (id) {
  return request.delete(rootUrl)
    .send( { id: id } )
    .then(res => res.body)
}