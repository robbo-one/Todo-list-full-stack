import request from 'superagent'
const rootUrl = '/api/v1/todos'

export function getTodos () {
  return request.get(rootUrl)
    .then(res => {
      return res.body;
    })
};

export function addTodo(newTodo) {
  return request.post(rootUrl)
  .send({todo: newTodo})
  .then(res => console.log(res))
  .catch(err => {
    console.log(err)
  })
}

export function deleteTodo(id) {
  return request.delete(rootUrl)
  .send({id: id})
  .then(res => res.body)
  .catch(err => {
    console.log(err)
  })
}

export function updateTodo(id, completed) {
  return request.patch(rootUrl)
  .send({id: id, completed: completed})
  .then(res => res.body)
  .catch(err => {
    console.log(err)
  })
}