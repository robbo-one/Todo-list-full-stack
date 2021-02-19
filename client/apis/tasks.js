import request from 'superagent'

export function getTasks() {
    return request.get('/tasks')
    .then(res => res.body)
}