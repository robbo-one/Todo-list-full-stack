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
      <input className="new-todo" placeholder="What needs to be done?" autoFocus={true} />
    </>
  )
}

export default AddTodo
