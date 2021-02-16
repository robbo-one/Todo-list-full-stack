import React, {useState, useEffect} from 'react'
import { connect } from "react-redux"

import {fetchTodos} from '../actions/index'

function ListOfTodos (props) {

    useEffect(() => {
       props.dispatch(fetchTodos())
    }, [])

    return(
        <>
            <ul>
                {props.todos.map(td => 
                <li key={td.id}>{td.task}</li>)}
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