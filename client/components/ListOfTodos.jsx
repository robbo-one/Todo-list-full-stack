import React, {useState, useEffect} from 'react'
import { connect } from "react-redux"

import {fetchTodos, deleteTheTodos} from '../actions/index'

function ListOfTodos (props) {

    useEffect(() => {
       props.dispatch(fetchTodos())
    }, [])

    const deleteOneTodo = (id) => {
      return props.dispatch(deleteTheTodos(id))
    }

    return(
        <>
            <ul>
                {props.todos.map(td => 
                <li key={td.id}>{td.task} 
                    <br/>
                    <button type='button' onClick={() => deleteOneTodo(td.id)}>
                          delete
                    </button>
                </li>)}
               
            </ul>
        </>
    )
}

function mapStateToProps (globalState) {
    return {
        todos: globalState.todos
    }
}

export default connect(mapStateToProps)(ListOfTodos)