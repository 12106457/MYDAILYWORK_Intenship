import React, { useState } from 'react'
import { Link } from 'react-router-dom'
 
const Register = () => {

    const [data,setdata]=useState({
        name:"",
        username:"",
        password:"",
        email:""
     })
     function handleInput(e){
        setdata({...data,[e.target.name]:e.target.value})
        
    
     }
      function handleSubmit(e){
        e.preventDefault()
        console.log(data)
        setdata({name:"",username:"",password:"",email:""})

        // fetch('http://localhost:4000/register',{
        //     method:"POST",
        //     body:JSON.stringify(data),
        //     headers:{
        //         "Content-Type":"application/json"
        //     }
        // })
        // .then((res)=>res.json())
        // .then((data)=>{
        //     // console.log(data);
        //     // alert(data.message);
        //     setmessage({type:"success",text:data.message});
        //     setTimeout(() => {
        //         setmessage({type:"invisible-msg",text:"dummy msg"})
        //     }, 3000);

        // })
        // .catch((err)=>{
        //    console.log(err);
        // })
        
        localStorage.setItem(data.email,JSON.stringify({...data}));
        alert("Successfully register");
        

       
        
      }
    
  return (
    <section className='container'>
        <form className='form' onSubmit={handleSubmit}>
            <h1>Start With E-Mart</h1>
            <input type='text' className='inp' required placeholder='Enter Name' name="name" value={data.name} onChange={handleInput} />
            <input type='text' className='inp' required placeholder='Enter Username' name="username" value={data.username} onChange={handleInput}/>
            <input type='password' className='inp' maxLength={8} minLength={3} placeholder='Enter password' name="password" value={data.password} onChange={handleInput} />
            <input type='email' className='inp' placeholder='Enter email' name="email" value={data.email}  onChange={handleInput} />
            <button className='btn' >Register</button>
            <p>Already Registed ? <Link to='/' >Login</Link></p>
            
        </form>
    </section>
  )
}

export default Register