import request from 'superagent'

export function getTasks() {
  return request.get("/api/v1/tasks")
  .then(res => res.body)
}

export function addTask(task) {
  return request.post("/api/v1/tasks")
  .send({task: task})
  .then(res => res.body)
}