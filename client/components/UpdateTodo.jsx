import React,{ useState } from 'react'
import { connect } from "react-redux"
import { newTask } from '../actions/index'


const mapStateToProps = (globalState) => {
    return {
      tasks: globalState.tasks
    }
  }
  export default connect(mapStateToProps)(AddTodo)