import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.scss'
import Footer from './components/Footer'
import Header from './components/Header'
import Routes from './Routes'

function App() {

  return (
    <Router basename={'/bestCare/'} >
      <div id="App">
        <Header/>
        <Routes/>
        <Footer/>
      </div>
    </Router>
  )
}

export default App
