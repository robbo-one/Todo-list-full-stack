import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
// import { getTasks } from '../apis/tasks'
// import AddTodo from './AddTodo'

// function Tasks (props) {
//     const t = props.Tasks
// }

// const handleChange = (evt) => {

// }

// return (
//     <>
//     <ul className='todo-list'>
//         {t.map(task => {
//             return (
//                 <li key={task.id} className={task.completed == 'yes' ? 'completed' : ''}>
//                     <div className='view'>
//                         <input className='toggle' type='checkbox'/>
//                         <label>{task.task}</label>
//                         <button className='remove'></button>
//                     </div>
//                     <input className='edit' value='hello' onChange={handleChange}/>
//                 </li>
//             )
//             })}
//             </ul>
//              </>
//             )    

//         const mapStateToProps = (globalState) => {
//             return {
//                 tasks : globalState.tasks 
//             }
//         }

// export default connect(mapStateToProps)(Tasks)