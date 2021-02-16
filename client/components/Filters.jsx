import React, { useState } from 'react'
import { connect } from 'react-redux'
import { filter } from '../actions'

const Filters = (props) => {

  const [ selected, setSelected ] = useState('all')

  const changeSelected = (selected) => {
    setSelected(selected)
    props.dispatch(filter(selected))
  }

  return (
    <ul className="filters">
          <li>
            <a className={selected === 'all' ? "selected" : null} 
              onClick={() => changeSelected('all')}
              href="#/">
              All
            </a>
          </li>
          <li>
            <a className={selected === 'active' ? "selected" : null} 
              onClick={() => changeSelected('active')}
              href="#/active">
              Active
            </a>
          </li>
          <li>
            <a className={selected === 'completed' ? "selected" : null}
              onClick={() => changeSelected('completed')}
              href="#/completed">
              Completed
            </a>
          </li>
    </ul>
  )
}

export default connect()(Filters)