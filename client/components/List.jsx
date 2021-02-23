import React, { useEffect } from 'react'
import { connect } from 'react-redux'

function List (props) {
  useEffect(() => {
  }, [])

  return (
    <>
      <ul className="todo-list">
        {props.tasks.map((task) => {
          return <li key={task.id}>{task.detail}</li>;
        })}
      </ul>
    </>
  )
}

const mapStateToProps = (globalState) => {
  return {
    tasks: globalState.reducerList,
  }
}
// tasks = how you want to access it in the component
// globalState is the name of the reducer

export default connect(mapStateToProps)(List)