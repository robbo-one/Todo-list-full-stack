import React, {useState, useEffect} from 'react'
import { connect } from "react-redux"

import {fetchTodos} from '../actions/index'

function ListOfTodos (props) {

    let tasks = props.dispatch

    useEffect(() => {
        fetchTodos()
    }, [])

    return(
        <>
            <ul>
                {tasks.map(td => <li>{td.task}</li>)}
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