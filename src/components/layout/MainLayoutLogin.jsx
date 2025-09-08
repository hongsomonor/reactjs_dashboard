import React from 'react'
import { Outlet , Link } from 'react-router-dom'

const MainLayoutLogin = () => {
  return (
    <div>
        <h1 className='text-5xl font-bold text-sky-600 mt-7'>Auth</h1>
        <div className='text-4xl font-bold text-gray-600 mt-5 ml-20 cursor-pointer flex gap-4'>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </div>
        <div className='w-full h-[600px] bg-gray-300'>
            <Outlet/>
        </div>
    </div>
  )
}

export default MainLayoutLogin