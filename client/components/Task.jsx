import React, { useEffect, useRef, useState } from "react"
import { connect } from 'react-redux'

function Task(props) {

  const task = props.task
  const inputEl = useRef(null)
  const [editing, setEditing] = useState(false)

  const doubleClickHandler = (e) => {
    setEditing(true)
    // e.target.parentNode.parentNode.className = "editing" 
    // inputEl.current.focus()
  }

  const keyDownHandler = (evt, id) => {
    if (evt.keyCode == 13) {
      //enter
      if(evt.target.value == ''){
        alert('task cannot be empty')
      } else {
        props.dispatch(updateTask(id, evt.target.value))
        evt.target.value = ""
        evt.target.parentNode.className = ""
      }
    }
    if (evt.keyCode == 27) {
      //escape
      evt.target.value = ""
      evt.target.parentNode.className = ""
      setEditing(false)
    }
  }

  useEffect(() => {
    if(editing){
      document.addEventListener('mousedown', handleClickOutside)
    }
    inputEl.current.focus()

  }, [editing])

  const handleClickOutside = (e) => {
    if(inputEl.current && inputEl.current.contains(e.target)){
      return
    } else {
      setEditing(false)
    }
  }

  return (
    <li key={task.id} className={task.completed == "yes" ? "completed" : editing ? 'editing' : ""} >
      <div className="view">
        <input
          readOnly
          className="toggle"
          type="checkbox"
          onClick={() => props.toggleClickHandler(task.id, task.completed)} //toggle complete
          checked={task.completed == "yes"}
        />
        <label onDoubleClick={doubleClickHandler}>{task.task}</label>
        <button
          className="destroy"
          onClick={() => props.deleteClickHandler(task.id)} //delete task
        ></button>
      </div>
      <input
        className="edit"
        ref={inputEl => inputEl && inputEl.focus()}
        defaultValue={task.task}
        onKeyDown={(evt) => keyDownHandler(evt, task.id)} //edit task
      />
    </li>
  )
}



export default connect()(Task)
