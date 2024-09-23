import React, { useState } from 'react';
import { Link } from 'react-scroll';
import '../Home/Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='navbar-container'>
      <div className='navbar-parent'>
        <div className='logo'>
          <img src="https://th.bing.com/th/id/OIP.HyOiFOQyWghanllq_PeG_AAAAA?rs=1&pid=ImgDetMain" alt="Logo not found" width="50px" />
        </div>
        
        <div className={`navbar ${menuOpen ? 'navbar-open' : ''}`}>
          <ul>
            <li style={{ color: "orangered" }}>
              <Link activeClass='active' to='PageOneScroll' spy={true} smooth={true} offset={0} duration={500} onClick={handleMenuClick}>Home</Link>
            </li>
            <li>
              <Link activeClass='active' to='PageTwoScroll' spy={true} smooth={true} offset={0} duration={500} onClick={handleMenuClick}>AboutMe</Link>
            </li>
            <li>
              <Link activeClass='active' to='PageThreeScroll' spy={true} smooth={true} offset={0} duration={500} onClick={handleMenuClick}>Resume</Link>
            </li>
            <li>
              <Link activeClass='active' to='PageFourScroll' spy={true} smooth={true} offset={0} duration={500} onClick={handleMenuClick}>ContactMe</Link>
            </li>
          </ul>
        </div>

        <div className='menu-icon' onClick={handleMenuClick}>
          <i className="fa fa-bars"></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
