import React from 'react'
import Profile from './Profile'
import Footer from '../Footer/Footer'
import './Home.css'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div className='home-container' id='PageOneScroll'>
      <Navbar/>
      <Profile/>
      <Footer/>
    
    </div>
  )
}

export default Home
