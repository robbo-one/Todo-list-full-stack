import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux'

import  { fetchTasks, delTask, uptTask } from '../actions'

const ListTodos = (props) => {
  
  const inputRef = useRef(null)

  useEffect(() => {
    props.dispatch(fetchTasks())
  }, [])

  const handleDelete = id => {
    props.dispatch(delTask(id))
  }
  
  const dblClickHandler = event => {
    event.target.parentNode.parentNode.className = "editing"
    inputRef.current.focus()
  }
  
  const keyHandler = (event, id) => {
    if(event.keyCode == 13) {
      props.dispatch(uptTask(id, event.target.value))
      event.target.value = ""
      event.target.parentNode.className = ""
    }
  }
  
  const escHandler = event => {
    if(event.keyCode == 27) {
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
                <label>{task.task}</label>
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
              <input className="edit" 
                ref={inputRef}
                defaultValue={task.task} 
                onKeyDown={(event) => keyHandler(event, task.id)} 
                onKeyDown={(event) => escHandler(event)} 
              />
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

// ref={input => input && input.focus()}