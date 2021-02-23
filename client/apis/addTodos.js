import request from "superagent";

const rootUrl = "/api/v1";

export function addTodos(task) {
  return request
    .post(rootUrl + "/todos") //goes to routes
    .send(task)
    .then((res) => {
      //console.log(res) //shows single new object with key value pairs
      //data received back from routes as res.json
      return res.body;
    });
}

export function updateATodo(id, updatedTodo) {
  const newTodo = { task: updatedTodo };
  console.log(newTodo);
  return request
    .patch(rootUrl + "/todos/" + id) //goes to routes
    .send(newTodo) //converts from string to object
    .then((res) => {
      //async, waits for response from route
      //console.log(res)
      //data received back from routes as res.json
      return res.body;
    });
}
export function deleteATodo(id) {
  console.log("inside the API function");
  console.log(id); //got to here
  //const idToDelete = { task: id };
  //console.log({ task: id });
  return request
    .delete(rootUrl + "/todos/")
    .send({id: id})
    .then((res) => {
      return null
    });
}
