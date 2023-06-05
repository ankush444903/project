import React, { useState } from 'react';

// Amenities
import BGIMG from '../Amenities/forgotPassword.png';
import LOGO from '../Amenities/RAI_LOGO.png';

// Components
import PasswordResetSuccess from '../Components/PasswordResetSuccess';
import PasswordResetFailure from '../Components/PasswordResetFailure';

// Firebase
import {auth} from '../Firebase/connection';
import {sendPasswordResetEmail} from 'firebase/auth'

export default function TEMP() {
  // States
  const [forgotMail,setForgotMail]=useState("");
  const [passsuccessReset,setPassswordResetSuccess]=useState(false);
  const [errorDisplay,setErrorDisplay]=useState(false);
  const handleSubmission=(event)=>{
    event.preventDefault();
   if(forgotMail==="")
   {
     setPassswordResetSuccess(false);
     setErrorDisplay("Please Enter Your Email");
     return;
   }
   sendPasswordResetEmail(auth,forgotMail).then(
     ()=>setPassswordResetSuccess(true)
   )
   .catch((err)=>{
     setErrorDisplay(err.message);
   })
 }
 document.title="Reset Password | Resolute AI";
  return (
    <div className='Temp h-screen flex justify-center items-center w-screen '>
        <div className="container flex w-3/4 sm:w-2/4 md:w-3/4 ">
            <div className="left w-1/2 hidden md:block">
                <img src={BGIMG} alt="Error in Loading" className='h-full w-full'/>
            </div>
            <div className="right border-2 border-pink-500 w-full py-2 md:w-1/2 lg:flex flex-col">
                <img src={LOGO} alt="Error in Loading"  className='w-3/4 m-auto'/>
                <h1 className='w-3/4 m-auto text-left text-2xl mt-2'>Forgot Password?</h1>
                <p className='mt-2 w-3/4 m-auto text-left'>Enter the email address associated with your account</p>
                <input type="email" placeholder='Enter Email...' value={forgotMail} onChange={(event)=>   
              {setForgotMail(event.target.value)}} className='block w-3/4 outline-none m-auto border-2 border-resoluteRed p-1 rounded-md mt-4'/>
              <div className="button mt-3 w-3/4 m-auto">
                <input type="button" value="Reset" onClick={handleSubmission} className='float-right w-2/4 bg-resoluteRed block p-1 rounded-md text-white font-bold cursor-pointer hover:bg-darkResoluteRed'/>
              </div>
            </div>
        </div>
        {passsuccessReset?<PasswordResetSuccess/>:null}
      {errorDisplay?<PasswordResetFailure msg={errorDisplay} position={setErrorDisplay} mail={setForgotMail}/>:null}
    </div>
  )
}
