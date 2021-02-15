import React , { useState } from 'react'
import { connect } from 'react-redux'
import { addTask } from '../actions'
// import { addTask } from '../apis/api'

function AddTodo (props) {

  const [formData, setFormData] = useState(
    {
      task_details:"",
      priority: null,
      completed: 0 // boolean
    }
  )

  const addToTasks = () => {
    props.dispatch(addTask(formData))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addToTasks()
  }

  const handleChange = (e) => {
    setFormData(currentFormData => {
      return {... currentFormData,
        [e.target.name] : e.target.value
      }
    })
  }

  // console.log(formData.task_details)

  return (
    <>
      <form onSubmit={handleSubmit}>

       <input className="new-todo" placeholder="What needs to be done?" autoFocus={true} name="task_details" onChange={handleChange} />
      </form>
    </>
  )
}

export default connect()(AddTodo)
