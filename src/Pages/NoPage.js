import React from 'react'
import { NavLink } from 'react-router-dom'

const NoPage = () => {
  return (
    <>
      <div className='text-center home_text pt-5'>
        <h1 className=' mt-5 text-white mb-3'>404 Error Page</h1>
        <button>
        <NavLink to='/myprotfolio' className='text-white text-decoration-none fw-bold'>Go back</NavLink>
        </button>
      </div>
    </>
  )
}

export default NoPage