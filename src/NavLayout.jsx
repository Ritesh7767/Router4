import React from 'react'
import { Link } from 'react-router-dom'
import './NavLayout.css'

const NavLayout = () => {
  return (
    <div className='navContainer'>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/user'>User</Link>
            </li>
            <li>
                <Link to='/login'>Login</Link>
            </li>
        </ul>
    </div>
  )
}

export default NavLayout