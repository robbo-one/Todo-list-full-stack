import React, { useState } from 'react'
import { isAuthenticated, register } from 'authenticare/client' 
import { baseApiUrl as baseUrl } from '../config'
import { Redirect } from 'react-router-dom'

const Register = (props) => {

  const [form, setForm] = useState({
    username: '',
    password: ''
  })

  const handleChange = (e) =>  {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleClick = (e) => {
    e.preventDefault()
    const { username, password } = form
    register({ username, password }, { baseUrl: baseUrl })
      .then(() => {
        if(isAuthenticated()) {
          props.history.push('/')
        }
      })
  }


  return (
    <>
      <h3>Sign up for some serious todo-ing</h3>
      <label>
        Username:
        <input type='text'
          name='username'
          onChange={handleChange} />
      </label>
      <label>
      Username:
      <input type='password'
        name='password'
        onChange={handleChange} />
      </label>
      <button onClick={handleClick}>Sign Up</button>
    </>
  )
}

export default Register