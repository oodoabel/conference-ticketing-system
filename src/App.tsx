import React from 'react'
import Ticket from './assets/Components/Ticket'
import Signin from './assets/Components/Signin'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <div>        
          <Routes>
            <Route path='/' element={<Signin />}/>
            <Route path='/ticket' element={<Ticket />}/>
          </Routes>        
      </div>
    </Router>
  )
}

export default App
