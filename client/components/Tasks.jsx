import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchTasks } from '../actions/actions'


const TasksList = (props) => {
  useEffect(() => {
    props.dispatch(fetchTasks())
  }, [])

  return (
    <>
      <ul>
        {props.tasks.map(task => {
          return <li key={task.id}>{task.detail}</li>
        })}
      </ul>
    </>
  )
}
const mapStateToProps = (globalState) => {
  return {
    tasks: globalState.tasks
  }
}
export default connect(mapStateToProps)(TasksList)