import React from 'react'

import { connect } from 'react-redux'



function UpdateTodo(props) {

    const todo = props.task
    console.log(todo)
    return (
        <>
            <label onDoubleClick={() => window.alert('Double clicked!')} key={todo.id}>{todo.task}</label>
        </>
    )
}

export default connect()(UpdateTodo)