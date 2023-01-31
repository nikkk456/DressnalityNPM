import React from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {
  return (
    <div>
      <div className='container text-center'>
        <h2>Error 404</h2>
        <h4>Uh No! You have Lost</h4>
        <p>Please Redirect to our home page for more content</p>
        <NavLink to="/">
        <button className="btn2">Go to Home</button>
        </NavLink>
      </div>
    </div>
  )
}

export default Error
