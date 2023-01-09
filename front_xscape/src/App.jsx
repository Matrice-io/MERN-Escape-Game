import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Banner from './components/Banner'
import Navbar from './components/Navbar'

function App() {
 

  return (
    <div className="App">
      <Routes>
        <Route path="/signOut" element={<SignOut/>}/>
      </Routes>
      <Navbar />   
      <Banner />
  </div>
  )
}

export default App
