import React, { useEffect } from 'react'
import { connect } from 'react-redux'

const UpdateTodo = props => {

  const dblClickHandler = event => {
    
  }

  return (
    <>

    </>
  )
}

export default connect()(UpdateTodo)

// state = {
//   displayText: ""
// };
// timer = 0;
// delay = 200;
// prevent = false;

// onDoubleClickHandler = () => {
//   clearTimeout(this.timer);
//   this.prevent = true;
//   this.setState(
//     {
//       displayText: "Double Click"
//     },
//     () => {
//       console.log(this.state);
//       setTimeout(() => {
//         this.prevent = false;
//       }, this.delay);
//     }
//   );
// };