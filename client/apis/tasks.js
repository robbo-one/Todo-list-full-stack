import request from 'superagent'

const baseUrl = '/api/v1/tasks'

export function getTasks () {
  return request
  .get(baseUrl)
  .then(res => {
    return res.body
  })
}

export function addTask (task, priority) {
  return request
  .post(baseUrl)
  .send({task : task, priority: priority})
  .then(res => {
    return res.send(200)
  })
  .catch(err => {
    console.log(err)
    return res.send(400)
  })
}

export function updateTask (id, newTask){
  return request
  .patch(baseUrl)
  .send({id : id, newTask : newTask})
  .then(res => {
    return res.send(200)
  })
  .catch(err => {
    console.log(err)
    return res.send(400)
  })
}

export function completeToggle (id, completedStatus){
  return request
  .patch(baseUrl + '/completed')
  .send({id : id, completedStatus : completedStatus})
  .then(res => {
    return res.send(200)
  })
  .catch(err => {
    console.log(err)
    return res.send(400)
  })
}

export function deleteTask (id) {
  return request
  .del(baseUrl)
  .send({id : id})
  .then(res => {
    return res.send(200)
  })
  .catch(err => {
    console.log(err)
    return res.send(400)
  })
}