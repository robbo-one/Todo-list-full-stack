import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchTodos } from '../actions'
import DeleteTodo from './DeleteTodo'
import UpdateTodo from './UpdateTodo'


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
									<UpdateTodo task={todo}/>
									<DeleteTodo id={todo.id}/>
								</div>
								<input className="edit" value="Create a TodoMVC template" />
							</li>
						} else {
							return <li>
								<div className="view">
									<input className="toggle" type="checkbox" />
									<UpdateTodo task={todo}/>
									<DeleteTodo id={todo.id}/>
								</div>
								<input className="edit" value="Rule the web" />
							</li>
						}
					})}
				</ul>
			</section>
			



		</>
	)
}
const mapStateToProps = (globalState) => {
	return {
		todos: globalState.todos
	}
}
export default connect(mapStateToProps)(Todos)
