import React from 'react'
import UserContextProvidor from './context/UserContextProvidor'
import Login from './components/Login'
import Status from './components/Status'
import './index.css'

const App = () => {
  return (
    <UserContextProvidor>
    <h2>we are debuging...</h2>
     <Login/>
     <Status/>
    </UserContextProvidor>
  )
}

export default App
