import React, { useEffect, useState } from 'react'
import { getTodos } from '../apis'

function Footer () {
  
  // const [refresh, setRefresh] = useState(false)
  const [todos, setTodos] = useState([])
  const [count, setCount] = useState(0)
  useEffect(() => {
    //   console.log("before calling getTodos")
    getTodos()
        .then(remoteTodos => setTodos(remoteTodos))
  },[] )

    function handleCount  ()  {
        let count = todos.length
        todos.map(todo => {
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
    }

    const showAll = () => {
        console.log("this is the showAll") 
    }

    const showActive = () => {
        console.log("this is the showActive")
    }

    const showCompleted = () => {
        console.log("this is the showCompleted")
    }


  return (
    <>
      <footer className="footer">
          <span className="todo-count">
            <strong>{handleCount()}</strong> item(s) left
          </span>

          <ul className="filters">
            <li onClick={showAll}>
                All
            </li>
            <li onClick={showActive}>
                Active
            </li>
            <li onClick={showCompleted}>
                Completed
            </li>
          </ul>
          <button onClick={handleClearComplete}className="clear-completed">Clear completed</button>

      </footer>
    </>
  )
}

export default Footer
