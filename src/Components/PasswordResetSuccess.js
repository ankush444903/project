/**
 * The function PasswordResetSuccess returns a React component that displays a success message with the
 * email account where the password reset link was sent.
 * @param props - props is an object that contains any properties passed down to the
 * PasswordResetSuccess component. In this case, it is expecting an "id" property to be passed down,
 * which is used to display the email account that the password reset link was sent to.
 * @returns A React functional component that renders a div containing an h1 element with the text
 * "Password Reset Link" and a p element with the text "Password Reset Link sent to {props.id} Mail
 * Account". The value of {props.id} will be passed in as a prop when the component is used.
 */
import React from 'react'
import {Link} from 'react-router-dom';
export default function PasswordResetSuccess(props) {
  return (
    <div className='PasswordResetSuccess absolute border-2 border-resoluteRed w-4/5 bg-white rounded-lg'>
      <h1>Password Reset Link</h1>
      <p>Password Reset Link sent to {props.id} Mail Account</p>
      <Link to={'/'} className='bg-resoluteRed p-1 inline-block my-2 rounded-md text-white uppercase cursor-pointer'>Home</Link>
    </div>
  )
}
