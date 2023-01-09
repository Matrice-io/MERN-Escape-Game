import { useState } from 'react'
import {Route,Routes} from "react-router-dom"

import Navbar from './components/Navbar'
import SignOut from "./pages/SignOut"

function App() {
 

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/signOut" element={<SignOut/>}/>
      </Routes>
    </div>
  )
}

export default App
