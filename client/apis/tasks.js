import request from 'superagent'

const rootUrl = '/api/v1'

export function getTodos () {
  return request
    .get(rootUrl + '/tasks')
    .then(res => {return res.body})
  }