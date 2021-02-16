import React from 'react'
import { delTodo } from '../actions'
import { connect } from 'react-redux'



function DeleteTodo (props) {

    const id = props.id

    const handleClick = () => {
        props.dispatch(delTodo(id))
    }

    return(
        <button onClick={() => handleClick()} className="destroy"></button>
    )
}

export default connect()(DeleteTodo)