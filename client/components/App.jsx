import React, { useEffect } from 'react'
import AddTodo from './AddTodo'
import {getTasks} from '../apis/tasks'
import {setTasks} from '../actions'
import {connect} from 'react-redux'


function App (props) {
  useEffect(() => {
    console.log('hello')
    getTasks()
    .then(tasks => {
      props.dispatch(setTasks(tasks))
      })
  }, [])

  return (
    <>
      <header className="header">
        <h1>todos</h1>
        <AddTodo />
        
      </header>
      <section className="main"></section>
      <footer className="footer"></footer>
    </>
  )
}

export default connect()(App)


// class App extends React.Component {
//   // use state
//   state = {

//   }

//   // useEffect
//   componentDidMount() {

//   }

// return

//   render() {

//   }
// }