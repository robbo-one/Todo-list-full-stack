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
			return res.send(400).json({ message: 'Cannot process request'})
		})
}

export function addTask(task, priority) {
	return request
		.post(rootUrl)
		.send({task: task, priority: priority})
		.then(res => {
			return res.body
		})
		.catch(err => {
			console.log(err)
			return res.send(400).json({ message: 'Cannot process request'})
		})
}

export function updateTask(id, newTask, priority) {
	return request
		.patch(rootUrl)
		.send({id: id, newTask: newTask, priority: priority})
		.then(res => {
			return res.body
		})
		.catch(err => {
			console.log(err)
			return res.send(400).json({ message: 'Cannot process request'})
		})
}

export function deleteTask(id) {
	return request
		.del(rootUrl)
		.send({id: id})
		.then(res => {
			return res.body
		})
		.catch(err => {
			console.log(err)
			return res.send(400).json({ message: 'Cannot process request'})
		})
}