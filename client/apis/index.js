import request from 'superagent'

const baseUrl = "/api/v1/todos"

export function getTodos() {
    return request.get(baseUrl)
        .then(res => res.body)
}

export function addTodo(todo) {
    // console.log(todo)
    return request.post(baseUrl)
        .send(todo)
        .then(res => res.body)
}