import React, { useEffect } from 'react'
import { connect } from 'superagent'
import AddTodo from './AddTodo'
import Tasks from './Tasks'

function App (props) {
  useEffect(() => {

  }, [])

  return (
    <>
      <header className="header">
        <h1>todos</h1>
        <AddTodo />
      </header>
      <section className="main">
        <Tasks />
      </section>
      <footer className="footer"></footer>
    </>
  )
}

// const mapStateToProps = (globalState) => {
//   return {
//     tasks : globalState.tasks
//   }
// }

// export default connect(mapStateToProps)(App)
export default App

