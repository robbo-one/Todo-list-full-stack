import React, { useEffect, useState } from 'react'
import AddTodo from './AddTodo'
// import DeleteTodos from './DeleteTodos'
import Footer from './Footer'
import ShowTodos from './ShowTodos'
// import UpdateTodos from './UpdateTodos'

function App () {
  
  // const [refresh, setRefresh] = useState(false)
  
  useEffect(() => {

  }, [])



  return (
    <>
      <header className="header">
        <h1>todos</h1>
        <AddTodo />
      </header>
      <section className="main">
      <ShowTodos />
      </section>
      <footer className="footer">
        <Footer />
      </footer>
    </>
  )
}

export default App
