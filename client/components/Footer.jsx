import React, { useEffect, useState } from 'react'
import { getTodos } from '../apis'
import {connect} from 'react-redux'
import {clearCompletedTodos} from '../actions'
import { Link, Redirect } from 'react-router-dom'

function Footer (props) {
  
  // const [refresh, setRefresh] = useState(false)
  // const [todos, setTodos] = useState([])
  // const [count, setCount] = useState(0)
  // useEffect(() => {
  //   //   console.log("before calling getTodos")
  //   getTodos()
  //       .then(remoteTodos => setTodos(remoteTodos))
  // },[] )

  const [activeTodos, setActiveTodos] = useState([])
  const [completedTodos, setCompletedTodos] = useState([])
  const [allTodos, setAllTodos] = useState([])

    function handleCount  ()  {
        let count = props.todos.length
        props.todos.map(todo => {
            if(todo.completed == 1) {
                count--
            } else {
                // console.log(count)
            }
            return todo
        })
        return count
    }

    const handleClearComplete = () => {
        console.log("this is the handleClearComplete")
        props.dispatch(clearCompletedTodos())
    }

    const showAll = () => {
        console.log("this is the showAll") 
        setAllTodos(props.todos)
    }

    const showActive = () => {
        console.log("this is the showActive")
        setActiveTodos(currentActiveTodos => {
          props.todos.map(todo => {
            if(todo.completed == 0) {
            currentActiveTodos.push(todo)
            return null
            }
          })
          return currentActiveTodos
        })
    }

    const showCompleted = () => {
        console.log("this is the showCompleted")
        setCompletedTodos(currentCompletedTodos => {
          props.todos.map(todo => {
            if(todo.completed == 1) {
            currentCompletedTodos.push(todo)
            return null
            }
          })
          return currentCompletedTodos
        })
    }


  return (
    <>
      <footer className="footer">
          <span className="todo-count">
            <strong>{handleCount()}</strong> item(s) left
          </span>

          <ul className="filters">
            <li onClick={showAll}>
                <Link to="/all">All</Link>
            </li>
            <li onClick={showActive}>
                <Link to="/active">Active</Link>
            </li>
            <li onClick={showCompleted}>
                <Link to="/completed">Completed</Link>
            </li>
          </ul>
          <button onClick={handleClearComplete}className="clear-completed">Clear completed</button>

      </footer>
    </>
  )
}

const mapStateToProps = (globalState) => {
  return {
    todos: globalState.todos
  }
}

export default connect(mapStateToProps)(Footer)
