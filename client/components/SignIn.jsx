import React, { useState } from 'react'
import { signIn, isAuthenticated } from 'authenticare/client'

import { baseApiUrl as baseUrl } from '../config'

function SignIn (props) {
  const [form, setForm] = useState({
    username: '',
    password: ''
  })

  function handleChange (e) {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }

  function handleClick (e) {
    console.log('click handler')
    e.preventDefault()
    const { username, password } = form
    signIn({ username, password}, { baseUrl: baseUrl } )
      .then(() => {
        console.log("authenticated")
        if(isAuthenticated()) {
          props.history.push('/')
        }
      })
  }

  return (
    <>
      <h3>Sign-in for some serious todo-ing</h3>
      <label>
        Username:
        <input type='text'
          name='username'
          onChange={handleChange} />
      </label>
      <label>
        Password:
        <input type='password'
          name='password'
          onChange={handleChange} />
      </label>
      <button onClick={handleClick}>Sign In</button>
    </>
  )

}

export default SignIn 