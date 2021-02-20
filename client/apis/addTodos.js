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

