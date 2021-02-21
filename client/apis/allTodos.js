import request from "superagent";

const rootUrl = "/api/v1";

export function getAllTodos() {
  return request
    .get(rootUrl + "/todos") //goes to routes
    .then((res) => { //res.json data received back from routes
      return res.body //res sent to actions where thunk conditional function is dispatched upon receipt of this data 
    })
}

