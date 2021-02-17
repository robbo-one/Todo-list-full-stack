
import React from 'react'
import { connect } from 'react-redux'
import { fetchActiveTodos, fetchCompletedTodos, fetchTodos, clearCompletedTodos } from '../actions'

const Footer = (props) => {

return(
<footer className="footer">
{/* <!-- This should be `0 items left` by default --> */}
<span className="todo-count"><strong>0</strong> item left</span>
{/* <!-- Remove this if you don't implement routing --> */}
<ul className="filters">
    <li>
        <a onClick={() => props.dispatch(fetchTodos())} className="selected" href="#/">All</a>
    </li>
    <li>
        <a onClick={() => props.dispatch(fetchActiveTodos())} href="#/tasks/active">Active</a>
    </li>
    <li>
        <a onClick={() => props.dispatch(fetchCompletedTodos())} href="#/tasks/completed">Completed</a>
    </li>
</ul>
{/* <!-- Hidden if no completed items are left ↓ --> */}
<button onClick={() => props.dispatch(clearCompletedTodos())} className="clear-completed">Clear completed</button>
</footer>

)
}

export default connect()(Footer)