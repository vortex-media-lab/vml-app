import React from 'react'
import './styles/App.scss'
import Carrousel from './components/Carrousel'
import Navbar from './components/Navbar'
import AboutUs from './components/AboutUs'
import Socios from './components/Socios'

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Carrousel />
      <AboutUs />
      <Socios />
    </div>
  )
}

export default App
