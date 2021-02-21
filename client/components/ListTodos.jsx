import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import  { fetchTasks, delTask } from '../actions'

const ListTodos = (props) => {

  useEffect(() => {
    props.dispatch(fetchTasks())
  }, [])

  const handleDelete = id => {
    console.log('delete')
    props.dispatch(delTask(id))
  }

  return (
    <>
      <ul className="todo-list">
        {props.tasks.map(task => {
          if(task.completed === 'yes') {
            return (
              <li key={task.id} className="completed">
              <div className="view">
                <input className="toggle" type="checkbox" checked />
                <label>{task.task}</label>
                <button className="destroy" onClick={() => handleDelete(task.id)}></button>
              </div>
              <input className="edit" value="Create a TodoMVC template" />
            </li>
            )
          } else {
          return (
            <li key={task.id}>
              <div className="view">
                <input className="toggle" type="checkbox" />
                <label>{task.task}</label>
                <button className="destroy" onClick={() => handleDelete(task.id)}></button>
              </div>
              <input className="edit" value="Create a TodoMVC template" />
            </li>
          )
        }})} 
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