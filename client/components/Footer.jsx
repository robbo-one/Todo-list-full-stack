import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import {filterAll, fetchTodos} from '../actions'


function Footer(props) {


    const handleClick = (filter) => {
        props.dispatch(filterAll(filter))
    }


    return (
        <>
            <span className="todo-count"><strong>{props.todos.length}</strong> item left</span>
            <ul className="filters">
                <li>
                    <a  onClick={() => handleClick('all')} className="selected" >All</a>
                </li>
                <li>
                    <a onClick={() => handleClick('active')} >Active</a>
                </li>
                <li>
                    <a onClick={() => handleClick('completed')}  >Completed</a>
                </li>
            </ul>
            <button className="clear-completed">Clear completed</button>
        </>
    )
}

const mapStateToProps = (globalState) => {
    return {
        todos: globalState.todos,
        filters: globalState.filters
    }
}

export default connect(mapStateToProps)(Footer)