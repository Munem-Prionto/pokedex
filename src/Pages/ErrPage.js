import React from 'react'
import { Link } from 'react-router-dom'

export default function ErrPage() {
  return (
    <div>
      <Link to='/'>
        <h1>404 not found</h1> 
        <h2>Go Back -{'>'} </h2>

      </Link>
    </div>
  )
}
