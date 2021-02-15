import React, {useState, useEffect} from 'react'
// import { Redirect } from 'react-router-dom'
import { addTodo, getTodos } from '../apis'
// import ShowTodos from './ShowTodos'

function AddTodo (props) {
  // const[redirect, setRedirect] = useState(false)
  const [formData, setFormData] = useState(
    [
      {
        task_details: "",
      }
    ]
  )

  const handleChange = (e) => {
    // console.log(e.target.value)
    setFormData(() => {
      return {
        [e.target.name] : e.target.value
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(formData)
    addTodo(formData)
    setFormData("")
    //should call setTodos so that it will update page when enter is pressed
    // setRedirect(true)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
      <input className="new-todo" name="task_details" placeholder="What needs to be done?" autoFocus={true} onChange={handleChange} value={formData.task_details}/>
      </form>
      
    </>
  )
}

export default AddTodo
