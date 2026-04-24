import React from 'react'
import './LoadingScreen.css'

const LoadingScreen = () => {
  return (
    <div className='loader'>
      <div className='spinner'></div>
      <div className='text | fw-bold'>Loading...</div>
    </div>
  )
}

export default LoadingScreen