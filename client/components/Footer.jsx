import React from 'react'
import { connect } from 'react-redux'


const Footer = (props) => {
  const todoCount = props.todos.length

 return (
   <>
    <span class="todo-count">
      <strong>{todoCount}</strong> 
      { todoCount === 1 ? " item left" : " items left" }
    </span>
   </>
 )
} 

const mapStateToProps = (globalState) => {
  return {
    todos: globalState.todos
  }
}

export default connect(mapStateToProps)(Footer)