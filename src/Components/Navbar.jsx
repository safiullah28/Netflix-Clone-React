import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='absolute z-50 flex items-center justify-between w-full p-4'>
        <Link to='/' >
            <h1 className='text-5xl text-red-600 uppercase cursor-pointer font-nsans-bold'>netflix</h1>
        </Link>
        <div>
            <Link to='/login'>
                <button className='pr-4 capitalize '>login</button>
            </Link>
            <Link to='/signup'>
                <button className='px-6 py-2 capitalize bg-red-600 rounded cursor-pointer'>sign up</button>
            </Link>
        </div>
    </div>
  )
}

export default Navbar