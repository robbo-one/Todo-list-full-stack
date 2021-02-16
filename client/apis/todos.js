import request from 'superagent'

const rootUrl = '/api/v1'

export function getTodos (){
  return request
  .get(rootUrl)
  .then(res => {
    return res.body
  })
  .catch('bad getTodos')
}

export function addTodos (newTodo) {
  return request
  .post(rootUrl)
  .send({ newTodo : todo })
  .then(res => {
    return res.body.todo
  })
  .catch('bad addTodos')
}

export function deleteTodos (id){
  return request
  .delete(rootUrl)
  .then(res => {
  return res.body 
})
.catch('bad delete')
}

export function updateTodos (todo){
  return request.put(rootUrl)
  .patch(todo)
  .then(res => res.body.todos)
  .catch('bad update')
}

