import React, { useState } from 'react'
import { connect } from 'react-redux'
import addTodo from '../apis/todos'

function AddTodo (props) {
  return (
    <>
      <input className="new-todo" placeholder="What needs to be done?
      
      " autoFocus={true} 
      />
    </>
  ) 
}

console.log("new-todo")
export default AddTodo
