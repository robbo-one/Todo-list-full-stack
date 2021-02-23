// import React, { useState } from "react";
// import { deleteTodo } from "../actions/setAllTodos";
// import { connect } from "react-redux";

// const DeleteTodo = (props) => {
//     const[deletedTodo, setDeletedTodo] = useState (props.todo.task) 
  
// }

// //clickhandler to start event


      
//   //handleChange calls setNewUpdatedTodo function which sets data entry into state
//   const handleChange = (event) => {
//     setUpdatedTodo(event.target.value)
//   }
  
//   const handleKeyUp = (event) => {
//     if (event.code == "Enter") {
//       props.dispatch(updateTodo(props.todo.id, updatedTodo))
//       setEditing(false)
//     }
//   }
  
  
//   //when enter is clicked changed value field is captured and updateTodo function is fired off to action file
//   // function UpdateTodo(id, updatedTodo) {
//   //  dispatch(updateTodo(id, updatedTodo))
//   // }
  
//         return (
//           <li className={editing ? 'editing' : '' }>
//                   <div className="view">
//                     <input className="toggle" type="checkbox" />
//                     <label onDoubleClick={() => handleDoubleClick()}>{updatedTodo}</label > 
//                     <button className="destroy"></button>
//                   </div>
//                   <input className="edit" value={updatedTodo} onChange={(event) => handleChange(event)} onKeyUp={(event) => handleKeyUp(event)} />
//                 </li>
//         )
//   }  
  
//   //class no class
//   export default connect () (ATodo) //wiating for MS2P, if none then fires function
  
  
  
  
  