import React, { useEffect } from "react";
import AddTodo from "./AddTodo";

function App() {
  useEffect(() => {}, []);

  //Redux - will put todos in global state
  // componentDidMount() {
  //   // fetchTodos()
  
  // }





  return (
    <>
      <header className="header">
        <h1>todos</h1>
        <AddTodo />
      </header>
      <section className="main"></section>
      <footer className="footer"></footer>
    </>
  );
}

export default App

