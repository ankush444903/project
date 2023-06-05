import React from 'react';
import { Link } from 'react-router-dom';
export default function Error404() {
  document.title="Error 404 | Resolute AI";
  return (
    <div className='Error404 flex justify-center items-center h-screen'>
      <div className="mainErrorPage">
        <h1 className='text-resoluteRed font-bold text-8xl'>OOPS!</h1>
        <p className='w-full m-auto text-sm mt-2'>The page you are looking for doesn't exist</p>
        <Link to="/" className='bg-resoluteRed text-white rounded-lg pl-2 pr-2 pt-1 pb-1 inline-block mt-2 cursor-pointer font-bold hover:bg-darkResoluteRed uppercase'>Home</Link>
      </div>
    </div>
  )
}
