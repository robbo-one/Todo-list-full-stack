import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchTasks } from '../actions'


const TodoList = (props) => {
const todos = props.todos
// const filter = props.filterList.filter

useEffect(() => {
    props.dispatch(fetchTasks())
}, [])

return  (
    <>
        <ul className="todo-list">
            {props.tasks.map(task => {
               return (
                   <li key={task.id} className={task.completed == 'yes' ? 'completed' : ""}>
                     <div className="view">
                        <input
                         className="toggle"
                          type="checkbox" 
                          onClick={() => props.toggleClickHandler(task.id, task.completed)}
                          checked={task.completedd == 'yes'} 
                          />
                        <label>{task.task}</label>                  
                        <button className="destroy"></button>
                        </div>
                        <input className="edit" value="Create a TodoMVC template" />
                    </li>

               )     
            })
        }
                     <li>
                        <div className="view">
                        <input className="toggle" type="checkbox" />
                        <label>Buy a unicorn</label>
                        <button className="destroy"></button>
                        </div>
                        <input className="edit" value="Rule the web" />
                    </li>
                </ul>
    </>
)



// const filterList = (filter, todos) => {
//     switch (filter) {
//         case 'all':
//             return todos
//     }
// }


}

const mapStateToProps = (globalState) => {
    return {
      tasks: globalState.tasks
    }
  }
  export default connect(mapStateToProps)(TodoList)