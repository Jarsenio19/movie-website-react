import React from 'react'
import Description from './Description'
import './Footer.css'

const Footer = () => {
  return (
    <div>
      <Description />

      <footer className="footer |text-neutral-200 padding-block-100 ">
        <p>Copyright © 2026 movie-website-react-psi.vercel.app All Rights Reserved</p>
      </footer>
    </div>
  )
}

export default Footer