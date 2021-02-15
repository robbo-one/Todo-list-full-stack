import request from 'superagent'

const rootUrl = '/api/v1'

export function getTodos (){
  return request
  .get(rootUrl)
  .then(res => {
    return res.body
    .catch('bad getTodos')
  })
}

export function addTodo (todo) {
  return request
  .post(rootUrl)
  .send({todo : todo})
  .then(res => 
    res.body.todos)
  .catch('bad addTodos')
}

export function deleteTodo (id){
  return request
  .delete(`${rootUrl}/${id}`)
  .then(res =>res.body.todos)
  .catch('bad delete')
}

export function updateTodo (todo){
  return request.put(rootUrl)
  .patch(todo)
  .then(res => res.body.todos)
  .catch('bad update')
}