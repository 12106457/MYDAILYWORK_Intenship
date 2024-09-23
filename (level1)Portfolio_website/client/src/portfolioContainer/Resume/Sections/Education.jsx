import React from 'react'
import "../Sections/Sections.css";
const Education = () => {
  return (
    <div className='section-container'>
        <div className='section-parent'>
            <div className="edcation">
                <div className="part1">
                    <p>Lovely Professional University,Jaladhar</p>
                    <span>2021-2025</span>
                </div>
                <div className="part2">
                    B.Tech, Computer Science and Engineering.
                </div>
            </div><br />

            <div className="edcation">
                <div className="part1">
                    <p>Aditya Junior College,Rajahmundry</p>
                    <span>2019-2021</span>
                </div>
                <div className="part2">
                    Intermediate, MPC Group.
                </div>
            </div><br />

            <div className="edcation">
                <div className="part1">
                    <p>Sri Shirdi Sai E.M School,Kadiyam</p>
                    <span>2018-2019</span>
                </div>
                <div className="part2">
                    Secondary Education.
                </div>
            </div>
        </div>
        
      
    </div>
  )
}

export default Education
