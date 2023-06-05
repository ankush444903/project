import React, { useState } from 'react';
import Logo from '../Amenities/RAI_LOGO.png';
import BgImg from '../Amenities/bg-img-login.jpg';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../Firebase/connection';
import { Link } from 'react-router-dom';
export default function Login() {
    document.title="Login | Resolute AI";
    const [credentials,setCredentials]=useState({
      mail:"",
      password:""
    })
    const [er,setError]=useState("");
    const[disbutton,setDisButton]=useState(false);
    const handleChange=(event)=>{
      if(event.target.name==='mail')
      {
        setCredentials({...credentials,mail:event.target.value});
      }
      else{
        setCredentials({...credentials,password:event.target.value});
      }
    }
    const onSubmit=(event)=>{
      setError("")
      event.preventDefault();
      setDisButton(true);
      if(credentials.mail==="")
      {
        setError("Please Enter Email!");
        setDisButton(false);
        return;
      }
      if(credentials.password==="")
      {
        setError("Please Enter Password")
        setDisButton(false);
        return;
      }
      signInWithEmailAndPassword(auth,credentials.mail,credentials.password)
      .then(async (res)=>{console.log(res)})
      .catch( (err)=>{
        setDisButton(true);
        setError(err.message);
      });
    }
  return (
    <div className='w-screen h-screen flex justify-center items-center overflow-x-hidden'>
      <div className="mainBox shadow-2xl w-4/5 flex sm:w-3/4">
        <div className="left w-1/2 hidden md:block ">
          <img src={BgImg} alt="Error in Loading | BackGround" className='md:h-full'/>
        </div>
        <div className="right w-full md:w-1/2 lg:flex lg:flex-col lg:justify-center">
              <div className="img">
                <img src={Logo} alt="Error in Loading | Logo" className='w-full m-auto sm:w-3/4 sm:mt-2 '/>
              </div>
              <h1 className='mt-2 sm:text-lg md:text-base-'>PORTAL - Resolute AI</h1>
              <form action="" onSubmit={onSubmit}>
              <div className="emailInput">
                <input type="email" name="mail" id="mailInput" placeholder='Email' value={credentials.mail} onChange={handleChange} className='p-2 border-2  border-resoluteRed outline-none w-4/5 my-4 sm:w-3/4 md:p-1 rounded-sm'/>
              </div>
              <div className="passwordInput">
                <input type="password" name="password" id="PasswordInput" placeholder='Password' value={credentials.password} onChange={handleChange} className='p-2 shadow-md border-2 border-resoluteRed outline-none w-4/5 sm:w-3/4 md:p-1 rounded-sm'/>
              </div>
              <div className="otherOptions flex justify-between w-4/5 m-auto my-3 sm:w-3/4">
                <div className="remeberOption flex justify-center">
                <input type="checkbox" id="remember"/>
                <label htmlFor="remeber" className='mx-1 text-xs sm:text-base md:text-xs lg:text-sm'>Remember Me</label>
                </div>
                <Link to={"/reset"} className='text-xs sm:text-base md:text-xs lg:text-sm'>Recovery Password?</Link>
              </div>
              <div className="msg">
                <small className='text-resoluteRed text-center w-3/4 m-auto'>{er}</small>
              </div>
              <input type="submit" value="Login" disabled={disbutton} className='bg-darkResoluteRed disabled:bg-gray-500 p-2 w-4/5 text-white font-bold rounded-md my-4 cursor-pointer hover:bg-resoluteRed text-sm sm:w-3/4'/>
              </form>
        </div>
      </div>
    </div>
  )
}
