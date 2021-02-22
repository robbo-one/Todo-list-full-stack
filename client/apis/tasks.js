import request, { del } from 'superagent'

const rootUrl = '/api/v1'

export function getTasks () {
    return request.get(rootUrl + '/tasks')
    .then(res => {
        return res.body
    })
}

export function addTask (task, priority) {
    return request
    .post(rootUrl + '/tasks')
    .send({task : task,priority:priority})
    .then(res => {
         return res.body
    })
}
//     .catch(err => {
//         console.log(err)
//         return res.send(400)
//      })
//     }

//     export function updateTask (id, newTask) {
//         return request
//         .patch(rootUrl)
//         .send({id :id, newTask : newTask})
//         .then(res => {
//             return res.send(200)

//         })
//     }

