import React, { useRef, useState } from 'react'
import "../Contactus/Contactus.css"
import Image from "../../assets/Contact/contact.jpeg"
import emailjs from '@emailjs/browser';
import { Link } from 'react-scroll';
const Contactus = () => {
    
    const form = useRef();
    const [data,setData]=useState({from_name:"",from_email:"",message:""});
    function handleInput(e){
        setData({...data,[e.target.name]:e.target.value});
    }

    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_am5v4um', 'template_pftfwst', form.current, {
            publicKey: 'vau9st9Ra5uGuVL-7',
          })
          .then(
            () => {
                setData({from_name:"",from_email:"",message:""});
              alert('Email send SUCCESS!');
            },
            (error) => {
                alert('some thing went wrong');
              console.log('FAILED...', error.text);
            },
          );
    }
  return (
    <div className='contact-container' id='PageFourScroll'>
        <div className="about-title" style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
            <b><h1 style={{textAlign:"center",paddingTop:"30px",fontSize:"30px",fontWeight:'bolder'}}>Contact Me</h1></b>
        
            <p style={{borderBottom:"2px solid black",paddingBottom:"5px",width:"200px",textAlign:"center",fontSize:"10px"}}>Let's Keep In Touch</p>
            
        </div>
        <div className="contact-parent">
            <div className="tagline">
                <h2>Get In Touch <i class="fa-regular fa-envelope"></i>  <span className='cursur-blinking'></span></h2>
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
           <div className="contact">
                    <div className="contact-img">
                        <p>Send Your Email Here !</p>
                        <img src={Image} alt="not found" />
                    </div>
                    <div>
                            <form className="contact-form" onSubmit={sendEmail} ref={form}>
                                <div>
                                <label>Name</label><br />
                                <input type='text' name='from_name' value={data.from_name} onChange={handleInput} />
                                </div>

                                <div>
                                <label>Email</label><br />
                                <input type='email' name='from_email' value={data.from_email} onChange={handleInput} />
                                </div>

                                <div >
                                <label>Message</label><br />
                                <textarea className='message' name='message' value={data.message} onChange={handleInput}></textarea>
                                </div>

                                <div className="button">
                                    <button type='submit'>Send<i class="fa-regular fa-paper-plane"></i></button>
                                </div>


                            </form>
                 </div>
           </div>
        </div>
        <Link activeClass='active' to='PageOneScroll' spy={true} smooth={true} offset={0} duration={500}>
        <button className='top-button'><i class="fa-solid fa-arrow-up"></i></button>
        </Link>
      
    </div>
  )
}

export default Contactus
