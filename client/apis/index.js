//THIS IS THE API CLIENT STEP 8

import request from "superagent";

//export functions - reques url then receive res.body back from back end

export function getTodos() {
  return request
    .get("/v1/todos") //goes to routes
    .then((res) => {
      //data received back from routes as res.json
      return res.body;
    })
    .catch(errorHandler("GET", "/v1/todos"));
}

// export function addNewWidget (widget) {
//     return request
//       .post(widgetUrl)
//       .send(widget)
//       .then(response => response.body)
//       //rec'd response from route, then send to addWidget.jsx component
//   }

//   export function addPost (post) {
//     // convert the large paragraphs string into an array of paragraphs
//     post.paragraphs = post.paragraphs.split('\n')
//     return request.post('/v1/posts')
//       .send(post)
//       .then(res => {
//         return res.body
//       })
//       .catch(errorHandler('POST', '/v1/posts'))
//   }

// export function updateTodo(todo) {
//   return request
//     .patch(`/v1/todos/${todo.id}`)
//     .send(todo)
//     .then((res) => {
//       return res.body;
//     })
//     .catch(errorHandler("PATCH", "/v1/posts/:id"));
// }
