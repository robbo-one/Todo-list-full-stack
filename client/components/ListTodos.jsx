import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import  { fetchTasks } from '../actions'

const ListTodos = (props) => {

  useEffect(() => {
    props.dispatch(fetchTasks())
  }, [])

  return (
    <>
      <ul className="todo-list">
        {props.tasks.map(task => {
          return (
            <li key={task.id} className="completed">
              <div className="view">
                <input className="toggle" type="checkbox" />
                <label>{task.task}</label>
                <button className="destroy"></button>
              </div>
              <input className="edit" value="Create a TodoMVC template" />
            </li>
          )
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

export default connect(mapStateToProps)(ListTodos)