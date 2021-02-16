import React, { useState } from 'react'
import { addTodo, getTodos } from "../apis/tasks"

function AddTodo(props) {

  const [formData, setFormData] = useState({
    "task": '',
    "priority": '',
    "completed": '',
  })

  const handleChange = (e) => {
    setFormData(currentFormData => {
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
    addTodo(formData)
    console.log("added")
      .then(getTodos)
  }}

  return (
    <>
      <input onKeyDown={(e) => handleEnter(e)} onChange={(e) => handleChange(e)} className="new-todo" placeholder="What needs to be done?" autoFocus={true} />
    </>
  )
}

export default AddTodo
