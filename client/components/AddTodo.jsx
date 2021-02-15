import React, { useState } from 'react'
import connect from 'react-redux'

function AddTodo (props) {
  return (
    <>
      <input className="new-todo" placeholder="What needs to be done?" autoFocus={true} />
    </>
  )
}

export default connect()(AddTodo)
