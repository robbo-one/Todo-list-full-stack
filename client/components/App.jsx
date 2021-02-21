import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import CurrentTasksList from './Current'
import AddNewTask from './New'

function App () {
  useEffect(() => {

  }, [])

  return (
    <>
      <header className="header">
        <h1>Get it done</h1>
      </header>
      <section className="main"></section>
      
      <CurrentTasksList />
      <AddNewTask />
      <footer className="footer"></footer>
    </>
  )
}

export default App
