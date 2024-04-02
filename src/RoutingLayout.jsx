import React from 'react'
import { Routes , Route} from 'react-router-dom'
import Home from './pages/Home'
import User from './pages/User'
import Login from './pages/Login'

const RoutingLayout = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/user' element={<User/>}/>
        <Route path='/login' element={<Login/>}/>
    </Routes>
  )
}

export default RoutingLayout