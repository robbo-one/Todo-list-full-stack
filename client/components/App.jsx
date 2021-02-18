import React, { useEffect } from "react";
import AddTodo from "./AddTodo";
import AllTodos from "./AllTodos";

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
        <AllTodos />
      </header>
      <section className="main"></section>
      <footer className="footer"></footer>
    </>
  );
}

export default App;
