import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Banner from './components/Banner'

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
