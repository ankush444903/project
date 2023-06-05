import React from 'react'

export default function PasswordResetFailure(props) {
  return (
    <div className='PasswordResetFailure absolute border-2 border-resoluteRed w-4/5 bg-white rounded-lg'>
      <h1>Password Reset Link</h1>
      <p>{props.msg}</p>
      <button className='bg-resoluteRed p-1 inline-block my-2 rounded-md text-white uppercase cursor-pointer' onClick={()=>{props.position(false); props.mail("")}}>Try Again!</button>
    </div>
  )
}
