import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import  { getTasks } from '../apis/api'

const ListTodos = () => {
  useEffect(() => {

  }, [])

  return(
    <>
      <ul class="todo-list">
        <li class="completed">
          <div class="view">
            <input class="toggle" type="checkbox" checked />
            <label>Taste JavaScript</label>
            <button class="destroy"></button>
          </div>
          <input class="edit" value="Create a TodoMVC template" />
        </li>
        <li>
          <div class="view">
            <input class="toggle" type="checkbox" />
            <label>Buy a unicorn</label>
            <button class="destroy"></button>
          </div>
          <input class="edit" value="Rule the web" />
        </li>
      </ul>
    </>
  )
}



export default connect()(ListTodos)