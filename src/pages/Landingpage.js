import React from 'react'
import Header from '../layouts/Header.js'
import Dashboard from './Dashboard.js'
import Events from './Events.js'

function Landingpage() {
  return (
    <div>
        <Header />  
        <Dashboard />   
        <Events />  
    </div>
  )
}

export default Landingpage