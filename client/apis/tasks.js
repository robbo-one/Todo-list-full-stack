import request from 'superagent'

const rootUrl = '/api/v1'

export function showTasks () {
  return request
    .get(rootUrl + '/tasks')
    .then(res => {return res.body})
  }