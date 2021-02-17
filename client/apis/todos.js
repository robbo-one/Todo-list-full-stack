import request from 'superagent'
import { getAuthorizationHeader } from 'authenticare/client'

const rootUrl = '/api/v1/todos'

export function getTodos () {
  return request.get(rootUrl)
    .then(res => {
      // console.log(res.body)
      return res.body
    })
}

export function addNewTodo (newTodo) {
  return request.post(rootUrl)
    .set(getAuthorizationHeader())
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

export function patchTodo (todo) {
  return request.patch(rootUrl)
    .set(getAuthorizationHeader())
    .send(todo)
    .then(res => res.body)
}