import request from 'superagent'

const rootUrl = 'api/v1/tasks'

export function getTasks() {
  return request
		.get(rootUrl)
		.then(res => {
			return res.body
		})
		.catch(err => {
			console.log(err)
		})
}

export function addTask(task, priority) {
	return request
		.post(rootUrl)
		.send({task: task, priority: priority})
		.then(res => {
			return null
		})
		.catch(err => {
			console.log(err)
		})
}

export function updateTask(id, newTask) {
	return request
		.patch(rootUrl)
		.send({id: id, newTask: newTask})
		.then(res => {
			return null
		})
		.catch(err => {
			console.log(err)
		})
}

export function deleteTask(id) {
	return request
		.del(rootUrl)
		.send({id: id})
		.then(res => {
			return null
		})
		.catch(err => {
			console.log(err)
		})
}