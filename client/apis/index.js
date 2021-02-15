import request from "superagent";

//export functions - reques url then receive res.body back from back end

export function getTodos() {
  return request
    .get("/v1/todos")//goes to routes
    .then((res) => { //data received back from routes as res.json
      return res.body;
    })
    .catch(errorHandler("GET", "/v1/todos"));
}


