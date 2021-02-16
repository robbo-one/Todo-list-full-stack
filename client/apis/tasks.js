import request from 'superagent'

const rootUrl = '/api/v1/tasks'

export function getTodos () {
  return request
    .get(rootUrl)
    .then(res => {return res.body})
    .catch(errorHandler('GET', '/v1/tasks'))
  }

  export function addTodo (todo) {
    return request
      .post(rootUrl)
      .send(todo)
      .then(res => {return res.body})
      .catch(errorHandler('POST', '/v1/tasks'))
  }

  export function changeTodo (todo) {
    return request
      .patch(`${rootUrl}/${todo.id}`)
      .send(todo)
      .then(res => {return res.body})
      .catch(errorHandler('PATCH', '/v1/tasks'))
  }

  export function deleteTodo (todoId) {
    return request
      .del(`${rootUrl}/${todoId}`)
      .then(res => res)
      .catch(errorHandler('DELETE', '/v1/tasks'))
  }

  function errorHandler (method, route) {
    return (err) => {
      if (err.message === 'Not Found') {
        throw Error(`Error: You need to implement an API route for ${method} ${route}`)
      } else {
        throw Error(`${err.message} on ${method} ${route}`)
      }
    }
  }
