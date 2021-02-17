import request from 'superagent'

const rootUrl = '/api'

export function getTodos (){
  return request.get(rootUrl)
  .then(res => {
    return res.body
  })
  .catch('bad getTodos')
}

export function addTodo (todo) {
  return request.post(rootUrl)
  .send(todo)
  .then(res => res.body)
  .catch('bad addTodos')
}

export function deleteTodo (id){
  return request.delete(`${rootUrl}/${id}`)
  .delete(todo.id)
  .then(res =>res.body.todos)
  .catch('bad delete')
}

export function updateTodo (todo){
  return request.put(rootUrl)
  .update(todo)
  .then(res => res.body.todos)
  .catch('bad update')
}