import request from 'superagent'

const rootUrl = '/api/v1/todos'

export function getTodos () {
  return request.get(rootUrl)
    .then(res => {
      console.log(res.body)
      return res.body
    })
}