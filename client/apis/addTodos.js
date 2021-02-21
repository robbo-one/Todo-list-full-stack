import request from "superagent";

const rootUrl = "/api/v1";

export function addTodos(task) {
  return request
    .post(rootUrl + "/todos") //goes to routes
    .send(task)
    .then((res) => {
      //console.log(res) //shows single new object with key value pairs
      //data received back from routes as res.json
      return res.body
    })
}

export function updateATodo(id, updatedTodo) {
  return request
    .post(rootUrl + "/todos/:id") //goes to routes
    .send(id, updatedTodo)
    .then((res) => {//async, waits for response from route
      //console.log(res) 
      //data received back from routes as res.json
      return res.body
    })
}

