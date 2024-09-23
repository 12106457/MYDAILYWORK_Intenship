import React from 'react'
import { Link } from 'react-router-dom';
import { usecart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const navigate=useNavigate();
  const {cartitem}=usecart();
  const show=false;
   function signup(){
    // setCredentials(true)
    return(
      navigate('/Signup') 
    )
  }
  return (
    <>
    <div className='navbar'>
        <div className="title"><Link to="/landing"><img src='https://emart-eg.com/static/media/logo2.e96394ce70516ef5d07d.png' width={"150px"}/></Link></div>
        <div className="search"><input type='search' placeholder='Search...'/></div>
        <div className="user">
            <div className="user-details">
                {/* {(true)?(<button>Logout</button>):<button onClick={()=>{signup()}}>Signup/SignIn</button>} */}
                <button onClick={()=>{navigate('/')}} className='logout-btn'>Logout</button>
            </div>
            <Link to='/cart'>
            <div className="cart">Cart
            <span>{cartitem.length}</span>
            </div>
            </Link>
        </div>  
    </div>
    <div className="submenu">
      <ul>
      <Link to='/special'><li>TodayOffers</li></Link>
      <Link to='/mobiles'><li>Mobiles</li></Link>
      <Link to='/computers'><li>Computers</li></Link>
      <Link to='/watches'><li>Watches</li></Link>
      <Link to='/men'><li>Men Wear</li></Link>
      <Link to='/woman'><li>Woman Wear</li></Link>
      <Link to='/furniture'><li>Furniture</li></Link>
      <Link to='/ac'><li>AC</li></Link>
      <Link to='/kitchen'><li>Kitchen</li></Link>
      <Link to='/fridge'><li>Fridge</li></Link>
      <Link to='/speakers'><li>Speakers</li></Link>
      <Link to='/tv'><li>TV's</li></Link>
      
    
      </ul>
    </div>
    </>
  )
}

export default Navbar;
