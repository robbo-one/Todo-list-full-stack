// import React from 'react'
// import { connect } from 'react-redux'

// import { uptTask } from '../actions'

// const UpdateTodo = props => {

//   const dblClickHandler = event => {
//     console.log(event)
//     props.dispatch(uptTask())
//     event.target.parentNode.parentNode.className = "editing"
//   }

//   return (
//     <>
//       <ul className="todo-list">
//         {props.tasks.map(task => {
//           return (
//             <li key={task.id} class="completed">
//               <div class="view">
//                 <input class="toggle" type="checkbox" />
//                 <label onDoubleClick={dblClickHandler}>{task.task}</label>
//                 <button class="destroy"></button>
//               </div>
//               <input class="edit" />
//             </li>
//           )
//         })}
//       </ul>
//     </>
//   )
// }

// const mapStateToProps = (globalState) => {
//   return {
//     tasks: globalState.tasks
//   }
// }

// export default connect(mapStateToProps)(UpdateTodo)