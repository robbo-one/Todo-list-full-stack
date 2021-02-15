import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

function AddTodo (props) {

  const [message, setMessage] = useState('')

  const[formData, setFormData] = useState({
    task: ''
  })

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
      <form>
        <label>
           <input className="new-todo" type='text' name='comment' placeholder="Do the thing?" autoFocus={true} onChange={handleChange} />
        </label>
      </form>
      <button>Add the task</button>
    </>
  )
}

function mapStateToProps (globalState) {
  return {
    todos: globalState.todos
  }
}

export default connect(mapStateToProps)(AddTodo)
