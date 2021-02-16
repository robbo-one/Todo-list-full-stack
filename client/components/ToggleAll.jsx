import React, { useState } from 'react'
import { connect } from 'react-redux'
import { taskCompleteToggle } from '../actions'

function ToggleAll(props) {
  const t = props.tasks
  const [allComplete, setAllComplete] = useState(false)

  const toggleAllClickHandler = () => {
    if(allComplete){
      t.map((task) => {
        return props.dispatch(taskCompleteToggle(task.id, "yes"))
      })
    } else {
      t.map((task) => {
        return props.dispatch(taskCompleteToggle(task.id, "no"))
      })
    }
    setAllComplete(!allComplete)
  }

  return (t.length > 0 && ( //check if any tasks exist
    <div>
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        onClick={toggleAllClickHandler}
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
    </div>
  ))
}

const mapStateToProps = (globalState) => {
  return {
    tasks: globalState.tasks,
  }
}

export default connect(mapStateToProps)(ToggleAll)