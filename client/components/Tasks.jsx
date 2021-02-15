import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { deleteTask } from '../actions'

// import { getTasks } from '../apis/tasks'
// import AddTodo from './AddTodo'

function Tasks (props) {
  const t = props.tasks
  // console.log(t)

  // const [tasks, setTasks] = useState([])
  // useEffect(() => {
  //   getTasks()
  //   .then((list) => {
  //     setTasks(...tasks, list)
  //   })


  // }, [])

  const handleChange = (evt) => {
  }

  const deleteClickHandler = (id) => {
    props.dispatch(deleteTask(id))
  }


  return (
    <>
      <ul className="todo-list">
        {t.map(task => {
          // console.log(task.task)
          return (
            <li key={task.id} className={task.completed == 'yes' ? 'completed' : ''}>
            <div className="view">
              <input className="toggle" type="checkbox" />
              <label>{task.task}</label>
              <button className="destroy" onClick={() => deleteClickHandler(task.id)}></button>
            </div>
            <input className="edit" value="Rule the web" onChange={handleChange}/>
          </li>
        )
        })}
      </ul>
    </>
  )
}

const mapStateToProps = (globalState) => {
  return {
    tasks : globalState.tasks
  }
}

export default connect(mapStateToProps)(Tasks)
