import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchTodos } from '../actions'


const Todos = (props) => {

	useEffect(() => {
		props.dispatch(fetchTodos())
	}, [])

	return (
		<>
			{/* <!-- This section should be hidden by default and shown when there are todos --> */}
			<section className="main">
				<input id="toggle-all" className="toggle-all" type="checkbox" />
				<label htmlFor="toggle-all">Mark all as complete</label>

				<ul className="todo-list">
					{/* <!-- These are here just to show the structure of the list items --> */}
					{/* <!-- List items should get the className `editing` when editing and `completed` when marked as completed --> */}

					{props.todos.map(todo => {
						const completed = (todo.completed[0].toUpperCase() + todo.completed.substring(1))
						if (completed == 'Yes') {
							return <li className="completed">
								<div className="view">
									<input className="toggle" type="checkbox" checked />
									<label key={todo.id}>{todo.task}</label>
									<button className="destroy"></button>
								</div>
								<input className="edit" value="Create a TodoMVC template" />
							</li>
						} else {
							return <li>
								<div className="view">
									<input className="toggle" type="checkbox" />
									<label key={todo.id}>{todo.task}</label>
									<button className="destroy"></button>
								</div>
								<input className="edit" value="Rule the web" />
							</li>
						}
					})}
				</ul>
			</section>

			<footer className="footer">
				{/* <!-- This should be `0 items left` by default --> */}
				<span className="todo-count"><strong>0</strong> item left</span>
				{/* <!-- Remove this if you don't implement routing --> */}
				<ul className="filters">
					<li>
						<a className="selected" href="#/">All</a>
					</li>
					<li>
						<a href="#/active">Active</a>
					</li>
					<li>
						<a href="#/completed">Completed</a>
					</li>
				</ul>
				{/* <!-- Hidden if no completed items are left ↓ --> */}
				<button className="clear-completed">Clear completed</button>
			</footer>

		</>
	)
}
const mapStateToProps = (globalState) => {
	return {
		todos: globalState.todos
	}
}
export default connect(mapStateToProps)(Todos)
