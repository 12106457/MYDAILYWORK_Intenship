import React from 'react'

const Projects = () => {
  return (
    <div className='section-container'>
      <div className="section-parent">
        <div className="project">
            <div className="part1">
                <p>Personal Portfolio Website</p>
                <span>2024-2025</span>
            </div>
            <div className="part2">
                Technologies Used: React JS, Bootstrap.
            </div>
            <div className="part3">
                <p>A Personal Portfolio Website to showcase all my details and projects at one place </p>
            </div>
        </div>

        <div className="project">
            <div className="part1">
                <p>Nutrify Website</p>
                <span>2023-2024</span>
            </div>
            <div className="part2">
                Technologies Used: React JS, Node JS, Express JS, Mongo db.
            </div>
            <div className="part3">
                <p> A comprehensive web platform offering personalized nutrition plans, healthy recipes, 
                    and wellness tips, featuring progress tracking, food logging, and goal setting to help 
                    users achieve their dietary and fitness goals.</p>
            </div>
        </div>

        <div className="project">
            <div className="part1">
                <p>Blood Donation Website</p>
                <span>2023-2024</span>
            </div>
            <div className="part2">
                Technologies Used: HTML, CSS, JavaScript, Bootstrap.
            </div>
            <div className="part3">
                <p> A life-saving web platform enabling donor registration, search for donors, 
                    and information on donation camps to facilitate and promote blood donations.</p>
            </div>
        </div>

        
      </div>
    </div>
  )
}

export default Projects
