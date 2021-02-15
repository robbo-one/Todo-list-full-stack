//@ts-check

import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchTodos } from "../actions/index";


function AddTodo (props) {

  useEffect(() => {
    props.dispatch(fetchTodos())
  }, []);
console.log(props)
  return (
    // <>
    //   <input className="new-todo" placeholder="What needs to be done?" autoFocus={true} />
    //   <div>
    //     {props.todos.map(todo => (
    //       <div key={todo.id}>{todo.todoTask}</div>
    //     ))}
    //   </div>
    // </>
    <div>
      <input className="new-todo" placeholder="What needs to be done?" autoFocus={true} />
      <section className="main">
      <input id="toggle-all" className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {/* <!-- These are here just to show the structure of the list items -->
        <!-- List items should get the class `editing` when editing and `completed` when marked as completed --> */}
        <li>
          {props.todos.map(todo => (
          <div className="view">
            <input className="toggle" type="checkbox" />
            
          <label key={todo.id}>{todo.todoTask}</label>
        
            
            
          </div>))}
          <input className="edit" value="Create a TodoMVC template" />
        </li>


        {/* {props.todos.map(todo => (
          <li key={todo.id}>{todo.todoTask}</li>
        ))} */}

        {/* <li className="completed">
          <div className="view">
            <input className="toggle" type="checkbox" checked />
            <label>Taste JavaScript</label>
            <button className="destroy"></button>
          </div>
          <input className="edit" value="Create a TodoMVC template" />
        </li>
        <li>
          <div className="view">
            <input className="toggle" type="checkbox" />
            <label>Buy a unicorn</label>
            <button className="destroy"></button>
          </div>
          <input className="edit" value="Rule the web" />
        </li> */}
      </ul>
      </section>
    </div>
  )
}

const mapStateToProps = (globalState) => {
  return {
    todos: globalState.todos
  }
};


export default connect(mapStateToProps)(AddTodo)
