import React from 'react'
import { updateTodo } from '../actions'

import { connect } from 'react-redux'



function UpdateTodo(props) {

    const todo = props.task
 
    const handleDubClick = () => {
        props.dispatch(updateTodo(todo))
    }


    return (
        <>
            <label onDoubleClick={() => handleDubClick()} key={todo.id}>{todo.task}</label>
        </>
    )
}

export default connect()(UpdateTodo)