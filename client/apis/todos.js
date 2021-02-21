//@ts-check

import request from 'superagent'

const rootUrl = '/api/v1'

export function getTodos() {
  return request.get(rootUrl + "/todos")
    .then(res => {
      return res.body.todos;
    });
};

export function toggleTask(id) {
  return request.post(rootUrl + "/todos/" + id + "/toggle")
    .then(res => {
      return res.body;
    });
};

export function addNewTask(task) {
  return request.post(rootUrl + "/todos/newTask")
    .send({task: task})
    .then(res => {
      return res.body;
    });
};

export function deleteTask(id) {
  return request.delete(rootUrl + "/todos/" + id + "/delete")
    .then((res) => {
      return res.body;
    });
};
