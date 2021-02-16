import React, { useState } from 'react'
import { fetchUpdatedTodos } from '../actions'
import { connect } from 'react-redux'

function AddTodo(props) {

  const [formData, setFormData] = useState({
    "task": '',
    "priority": '',
    "completed": '',
  })

  const handleChange = (e) => {
    setFormData(currentFormData => {
      e.preventDefault()
      return {
        ...currentFormData,
        "task": e.target.value,
        "priority": '???',
        "completed": "No"
      }
    })
  }

  const handleEnter = (e) => {
    if(e.keyCode === 13){
      if(formData.task !== ""){
        props.dispatch(fetchUpdatedTodos(formData))
      } else {
        alert("You must add something!")
      }
  }}

  return (
    <>
      <input onKeyDown={(e) => handleEnter(e)} onChange={(e) => handleChange(e)} className="new-todo" placeholder="What needs to be done?" autoFocus={true} />
    </>
  )
}

export default connect()(AddTodo)
