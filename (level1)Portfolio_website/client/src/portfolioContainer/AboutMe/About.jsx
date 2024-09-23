import React from 'react'
import Image from "../../assets/About/profile1.jpg"
import "../AboutMe/About.css";
import { Link } from 'react-scroll';

const About = () => {
  return (
    <div className='about-container' id='PageTwoScroll'>
        <div className="about-title" style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
            <b><h1 style={{textAlign:"center",paddingTop:"30px",fontSize:"30px",fontWeight:'bolder'}}>About Me</h1></b>
        
            <p style={{borderBottom:"2px solid black",paddingBottom:"5px",width:"200px",textAlign:"center",fontSize:"10px"}}>Why Choose Me ?</p>
            
        </div>

        <div className="about-parent">
            <div className="about-image">
                    <img src={Image} alt="not found" />
                <div className="img">
                </div>
            </div>

            <div className="about-details">
                <div>
                    <p>
                    I build dynamic, scalable web applications with the MERN stack,
                     ensuring seamless development from front-end to back-end. 
                     The stack's versatility and powerful features enable me to deliver
                      innovative, modern web solutions.
                    </p>
                    
                </div>
                <div>
                <h5>Here are a Few Highlights:</h5>
                    <ul >
                        <li>Full Stack Web Developer</li>
                        <li>Interaction Front End as per the design</li>
                        <li>React Developer</li>
                        <li>Building REST API</li>
                        <li>Managing database</li>
                    </ul>
                </div>
                <div className='about-btn'>
                    <div>
                    <Link activeClass='active' to='PageFourScroll' spy={true} smooth={true} offset={0} duration={500}>
                    <button className='btn btn-hire'>Hire</button>
                    </Link>
                    </div>
                    
                    
                    <div><a href="sepcilized.pdf" download={'sai.pdf'}>
                        <button className='btn btn-resume'>Resume</button>
                    </a></div>
                </div>


            </div>
        </div>

      
    </div>
  )
}

export default About
