import React from 'react'
import { Link } from 'react-router-dom'
import { logOff } from 'authenticare/client'

import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'


const Nav = () => {
  return (
    <div className='nav'>
      <IfAuthenticated>
        <Link to='#' onClick={logOff}>Log Off</Link>
      </IfAuthenticated> 
      <IfNotAuthenticated>
        <Link to='/signup'>Sign Up</Link>
        <Link to='/signin'>Sign In</Link>
      </IfNotAuthenticated>
    </div>
  )
} 

export default Nav