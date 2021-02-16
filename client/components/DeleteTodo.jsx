import React from 'react'
import {removeTodo } from '../actions'
import { connect } from 'react-redux'



function DeleteTodo (props) {

    const id = props.id

    const handleClick = () => {
        props.dispatch(removeTodo(id))
    }

    return(
        <button onClick={() => handleClick()} className="destroy"></button>
    )
}

export default connect()(DeleteTodo)