import React from 'react'
import Ready from './assets/Components/Ready'
import  AttendeeDetails  from './assets/Components/AttendeeDetails'
import TicketSelection from './assets/Components/TicketSelection'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <div>        
          <Routes>
            <Route path='/' element={<TicketSelection />}/>
            <Route path='/ready' element={<Ready />}/>
            <Route path='/attendeedetails' element={<AttendeeDetails />}/>
          </Routes>        
      </div>
    </Router>
  )
}

export default App
