import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import {getTasks} from '../apis/api'
import {fetchTasks} from '../actions'

function Tasks (props) {

  const [tasks, setTasks] = useState(
    [
      {
        id:null,
        task_details: "",
        task_priority: null,
        completed: null
      }
    ]
  )

  useEffect(() => {
    // fetchTasks()
    props.dispatch(fetchTasks())
  }, [])

  const fetchTasksLocal = () => {
    getTasks()
      .then(pulledTasks => {
        setTasks(baseTasks => {
          const listOfTasks = []
          pulledTasks.map(task => {
            listOfTasks.push(task)
            return task
          })
           baseTasks = listOfTasks
           return baseTasks
        })
      }
    )
  }
  

  return (
    <>
      {/* <h2>this is the tasks</h2> */}
      {/* {tasks.map(task => {
        return (
          
        <ul key={task.id}>
          <li className="new-todo" >{task.task_details}</li>
        </ul>
        )
      })} */}
      {globalTasks.map(task => {
        return (
          <ul>
            <li>{task.task_details}</li>
          </ul>
        )
      })}
    </>
  )
}

const mapStateToProps = (globalState) => {
  return {
    globalTasks: globalState.tasks
  }
}

export default connect(mapStateToProps)(Tasks)
