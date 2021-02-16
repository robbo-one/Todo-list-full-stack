import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import {addTheTodos} from '../actions/index'

function AddTodo (props) {

  const[formData, setFormData] = useState({
    task: '',
    // completed: false
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    props.dispatch(addTheTodos({task: formData.task}))
    console.log('submitted data')
   }

  const handleChange = (e) => {
    setFormData(currentFormData => {
      return{
        ...currentFormData,
        [e.target.name]: e.target.value
      }
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
           <input className="new-todo" type='text' name='task' placeholder="Do the thing" autoFocus={true} onChange={handleChange} />
        </label>
        <button type='submit'>Add the task</button>
      </form>
    </>
  )
}

function mapStateToProps (globalState) {
  return {
    todos: globalState.todos
  }
}

export default connect(mapStateToProps)(AddTodo)
