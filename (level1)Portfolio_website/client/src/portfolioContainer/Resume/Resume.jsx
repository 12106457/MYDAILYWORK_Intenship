import React, { useState } from 'react'
import '../Resume/Resume.css'
import Education from './Sections/Education'
import Work from './Sections/Work'
import Skills from './Sections/Skills'
import Projects from './Sections/Projects'
import Interest from './Sections/Interest'
const Resume = () => {
    const [state,setState]=useState(1);
    function handleState(index){
        setState(index);
    }
  return (
    <div className='resume-container' id='PageThreeScroll'>
       <div className="resume-title" style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
            <b><h1 style={{textAlign:"center",paddingTop:"30px",fontSize:"30px",fontWeight:'bolder'}}>Resume</h1></b>
        
            <p style={{borderBottom:"2px solid black",paddingBottom:"5px",width:"200px",textAlign:"center",fontSize:"10px"}}>My Formal Bio Data</p>
            
        </div>
        <div className="resume-parent">
            <div className="resume-sidebar">
                <ul style={{listStyle:"none"}}>
                    <li><div className="resume-sidebar-icon "><i class="fa-solid fa-user-graduate"></i></div> <div className={`resume-section ${(state==1)?"active-tab":"tab"}`} onClick={()=>{handleState(1)}} ><div>Education</div></div></li>
                    <li><div className="resume-sidebar-icon"><i class="fa-solid fa-clock-rotate-left"></i></div> <div className={`resume-section ${(state==2)?"active-tab":"tab"}`} onClick={()=>{handleState(2)}}>Work History</div></li>
                    <li><div className="resume-sidebar-icon"><i class="fa-solid fa-laptop-code"></i></div> <div className={`resume-section ${(state==3)?"active-tab":"tab"}`} onClick={()=>{handleState(3)}}>Programming Skills</div></li>
                    <li><div className="resume-sidebar-icon"><i class="fa-solid fa-chart-column"></i></div><div className={`resume-section ${(state==4)?"active-tab":"tab"}`} onClick={()=>{handleState(4)}}> Projects</div></li>
                    <li><div className="resume-sidebar-icon"><i class="fa-solid fa-palette"></i></div><div className={`resume-section ${(state==5)?"active-tab":"tab"}`} onClick={()=>{handleState(5)}}> Interests</div></li>
                </ul>
                
            </div>
            <div className="resume-details">
                <div className={(state==1?"active-content":"content")}><Education/></div>
                <div className={(state==2?"active-content":"content")}><Work/></div>
                <div className={(state==3?"active-content":"content")}><Skills/></div>
                <div className={(state==4?"active-content":"content")}><Projects/></div>
                <div className={(state==5?"active-content":"content")}><Interest/></div>
            </div>
        </div>
      
    </div>
  )
}

export default Resume
