import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../Firebase/connection';
// import Sidebar from /'../Components/Sidebar';
export default function Dashboard() {
    document.title="Dashboard | Resolute AI";
  return (
    <div className='Dashboard flex justify-center items-center h-screen'>
      <h1>Dashboard</h1>
      <button onClick={()=>{signOut(auth)}}>Sign Out</button>
    </div>
  )
}
