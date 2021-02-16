import React from 'react'
import { connect } from 'react-redux'

import Filters from './Filters'


const Footer = (props) => {
  const todoCount = props.todos.length

 return (
   <>
    <span className="todo-count">
      <strong>{todoCount}</strong> 
      { todoCount === 1 ? " item left" : " items left" }
    </span>
    <Filters />
   </>
 )
} 

const mapStateToProps = (globalState) => {
  return {
    todos: globalState.todos,
  }
}

export default connect(mapStateToProps)(Footer)