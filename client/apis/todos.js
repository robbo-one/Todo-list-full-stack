//@ts-check

import request from 'superagent'

const rootUrl = '/api/v1'

export function getTodos() {
  return request.get(rootUrl + "/todos")
    .then(res => {
      return res.body.todos;
    })
}

export function toggleTask(id) {
  return request.post(rootUrl + "/todos/" + id + "/toggle")
    .then(res => {
      return res.body;
    })
}
