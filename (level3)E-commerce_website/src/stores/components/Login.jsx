import React, { useContext, useEffect, useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom'



const Login = () => {
    const navigate=useNavigate();

    

    // useEffect(()=>{console.log("context object",loggedData.LoggedUser)})
    const [user,setuser]=useState({
        email:"",
        password:""
    })
    const [message,setmessages]=useState({
        type:"invisible-msg",
        text:'dummy'
    })
    function handleInput(e){
        setuser({...user,[e.target.name]:e.target.value});
    }
    function handleSubmit(e){
        e.preventDefault()
        // fetch('http://localhost:4000/login',{
        //     method:"POST",
        //     body:JSON.stringify(user),
        //     headers:{
        //         "Content-Type":"application/json"
        //     }
        // })
        // .then((res)=>{
        //     // console.log(res)
        //     if(res.status==403){
               
        //         setmessages({type:"error",text:"user or password is not Exist"})
        //     }
        //     else if(res.status==404){
                
        //         setmessages({type:"error",text:"password is incorrect"})
        //     }
            
        //     setTimeout(() => {
        //         setmessages({type:"invisible-msg",text:"dammy"})
        //     }, 2000);
        //         return res.json()
        
            
        // })
        // .then((data)=>{
        //     // console.log("data",data)
        //     if(data.token!=undefined){
                
        //         localStorage.setItem("nutrify-user",JSON.stringify(data))
        //         loggedData.setLoggedUser(data);
                
        //         navigate('/diet')
        //     }
            
        // })
        // .catch((err)=>{
        //     console.log(err);
        // })

        let data=JSON.parse(localStorage.getItem(user.email));
        console.log('email:',data.email,"password:",data.password);

        if( user.email!=data.email|| data.email==""){
            alert("Email is Incorrect...");
        }
        else if(user.password!=data.password){
            alert("Password is Incorrect...")
            
        }
         else if(user.email==data.email&&user.password==data.password){
            alert("you successfully logined...")
            navigate('/landing');
        }
        
    }

  return (
    <section className='container login-background' >
        <form className='form' onSubmit={handleSubmit}>
            <h1>Login To E-Mart</h1>

            <input type='email' className='inp' required placeholder='Enter email' name="email" value={user.email} onChange={handleInput} />

            <input type='password' className='inp' minLength={3} maxLength={8} placeholder='Enter password' name="password" value={user.password} onChange={handleInput} />
           
            <button className='btn'>Login</button>
            <p>Don't Have Account? <Link to='/Signup'>Register</Link></p>
           
        </form>
    </section>
  )
}

export default Login