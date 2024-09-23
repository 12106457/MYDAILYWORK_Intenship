import React from 'react'
// import Profile from './portfolioContainer/Home/Profile.jsx'
import './App.css'
// import Footer from './portfolioContainer/Footer/Footer.jsx'
import Home from './portfolioContainer/Home/Home'
import About from './portfolioContainer/AboutMe/About'
import Resume from './portfolioContainer/Resume/Resume'
import Contactus from './portfolioContainer/Contactus/Contactus'
const App = () => {
  return (
    <div>
     <Home/>
     <About/>
     <Resume/>
     <Contactus/>
    </div>
  )
}

export default App
