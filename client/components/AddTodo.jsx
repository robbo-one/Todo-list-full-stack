import React, { useEffect, useState } from 'react'

import { connect } from 'react-redux'
import { addNewTask, fetchNew } from '../actions/actions'

function AddTodo (props) {

 const [addCurrentState, addUpdateState] = useState(
    {
      detail: '',
    }
  );

  const handleChange = (e) => {
    addUpdateState((addCurrentState) => {
      return {
        ...addCurrentState,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.dispatch(fetchNew(addCurrentState))
    e.target.value = ''
  }

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      handleSubmit(e);
    }
  }

  return (
    <>
      <input className="new-todo" placeholder="What needs to be done?" autoFocus={true} onChange={ (e) => handleChange(e)} onKeyUp={ (e) => handleKeyPress(e)} name="detail"/>
    </>
  )
}

const mapStateToProps = (globalState) => {
  return {
    tasks: globalState.reducerAdd,
  }
}

export default connect(mapStateToProps)(AddTodo)
