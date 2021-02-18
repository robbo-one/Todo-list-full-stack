import request from "superagent";

const rootUrl = "/api/v1";

export function getAllTodos() {
  return request
    .get(rootUrl + "/todos") //goes to routes
    .then((res) => {
      //data received back from routes as res.json
      return res.body
    })
}

