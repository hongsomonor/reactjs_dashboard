import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div>
        <h1 className='text-5xl font-bold text-sky-600 mt-7'>MainLayout</h1>
        <div className='text-4xl font-bold text-gray-600 mt-5 ml-20 cursor-pointer flex gap-4'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/invoice">Invoice</Link>
        </div>
        <Outlet/>
        <footer>
            <h1 className='text-4xl font-bold text-sky-600 text-center w-full p-5 bg-gray-600 '>Footer</h1>
        </footer>
    </div>
  )
}

export default MainLayout