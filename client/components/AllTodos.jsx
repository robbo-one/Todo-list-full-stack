//render a list of all todos
import React, { useEffect } from "react";
import { connect } from 'react-redux'



//render a list of todos, map through and show task field for all


const AllTodos = (props) => {
    useEffect(() => {}, [])

{/* <section class="main">
        <input id="toggle-all" class="toggle-all" type="checkbox" />
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list">
         
          <li class="completed"> 
            <div class="view">
              <input class="toggle" type="checkbox" checked />
              <label>{todo.task}</label>
              <button class="destroy"></button>
            </div>
            <input class="edit" value="Create a TodoMVC template" />
          </li>
          <li>
            <div class="view">
              <input class="toggle" type="checkbox" />
              <label>{todo.task}}</label>
              <button class="destroy"></button>
            </div>
            <input class="edit" value="Buy a unicorn" />
          </li>
          <li class="editing">
            <div class="view">
              <input class="toggle" type="checkbox" />
              <label>{todo.task}</label>
              <button class="destroy"></button>
            </div>
            <input class="edit" value="Rule the web" />
          </li>
        </ul>
      </section> */}






    return (
        <>
            <ul class="todo-list">

            {props.todos.map(todo => (
                <li key={todo.id}>
                <div class="view">
                <input class="toggle" type="checkbox" />
                <label>{todo.task}</label>
                <button class="destroy"></button>
                </div>
                <input class="edit" value="Buy a unicorn" />
            </li>
                ))}
            </ul>
        </>
    )
}


























const mapStateToProps = (globalState) => {
    return {
        todos: globalState.todos
    }
}


export default connect(mapStateToProps)(AllTodos)
