import React, { Profiler } from 'react'
import {Typewriter} from 'react-simple-typewriter'
import '../Home/Profile.css'

import { Link } from 'react-scroll'


const Profile = () => {
  return (
    <div className='profile-container'>
      
      <div className="profile-parent">
        <div className="profile-details">
          
          
            <div className="colz">
              <div className="colz-icon">

                <a href="https://www.linkedin.com/in/sai-kedarisetti-718477253/">
                    <i class="fa-brands fa-linkedin"></i>
                </a>
                <a href="https://github.com/12106457">
                    <i class="fa-brands fa-github"></i>
                </a>
                <a href="https://mail.google.com/mail/">
                <i class="fa-regular fa-envelope"></i>
                </a>
                <a href="https://www.youtube.com/#!/login">
                    <i  className='fa fa-youtube-square'></i>
                </a>
                <a href="https://x.com/">
                    <i  className='fa fa-twitter'></i>
                </a>
              </div>
            </div>
            <div className="profile-details-name">
              Hello,I'M <span className='highlighted-text'>Sai</span>
            </div>
            <div className="profile-details-role">
                <span className='primary-text'>
                  {" "}
                  <h1>
                    {" "}
                    <Typewriter
                        words={['Ethusiastic Dev 🔴','Full Stack Developer 💻', 'MERN Stack Developer 📱', 'React/React Native Dev 🔵']}
                        loop={Infinity}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                   />
                  </h1>
                </span>
                <span className="profile-details-role-tagline">
                  Knack of building application with front and back end operations.
                </span>
            </div>
            <div className="profile-optins">
             <Link activeClass='active' to='PageFourScroll' spy={true} smooth={true} offset={0} duration={500}>
              <button className='btn btn-hire'>
                {""}Hire Me{""}

              </button></Link>
              <a href="/sepcilized.pdf" download={'sai.pdf'}>
                <button className='btn btn-resume'>Get Resume</button>
              </a>
            </div>
           
        </div>

        <div className="profile-picture">
          <div className="profile-picture-background">

          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
