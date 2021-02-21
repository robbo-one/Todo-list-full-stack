import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import  { fetchTasks, delTask, uptTask } from '../actions'

const ListTodos = (props) => {

  useEffect(() => {
    props.dispatch(fetchTasks())
  }, [])

  const handleDelete = id => {
    console.log('delete')
    props.dispatch(delTask(id))
  }

  const dblClickHandler = event => {
    event.target.parentNode.parentNode.className = "editing"
  }

  const keyHandler = (event, id) => {
    if(event.keyCode == 13) {
      props.dispatch(uptTask(id, event.target.value, 1))
      // console.log(event.target.value)
      event.target.value = ''
      event.target.parentNode.className = ""
    }
  }

  return (
    <>
      <ul className="todo-list">
        {props.tasks.map(task => {
          if(task.completed === 'yes') {
            return (
              <li key={task.id} className="completed">
              <div className="view">
                <input className="toggle" type="checkbox" />
                <label onDoubleClick={dblClickHandler}>{task.task}</label>
                <button className="destroy" onClick={() => handleDelete(task.id)}></button>
              </div>
              <input className="edit" />
            </li>
            )
          } else {
          return (
            <li key={task.id}>
              <div className="view">
                <input className="toggle" type="checkbox" />
                <label onDoubleClick={dblClickHandler}>{task.task}</label>
                <button className="destroy" onClick={() => handleDelete(task.id)}></button>
              </div>
              <input className="edit" onKeyDown={(event) => keyHandler(event, task.id)} />
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