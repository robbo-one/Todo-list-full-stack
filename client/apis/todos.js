import request from 'superagent'

const rootUrl = '/api/v1/todos'

export function getTodos () {
  return request.get(rootUrl)
    .then(res => {
      return res.body
    })
}

export function addNewTodo (newTodo) {
  return request.post(rootUrl)
    .send( { todo: newTodo} )
    .then(res => {
      console.log('hi there')
      return res.body
    })
    .catch(err => {
      console.log(err)
    })
}