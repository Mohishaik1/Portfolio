import React from 'react'

//Stylea
import '../Styles/Navbar.css'

const Navbar = () => {
  return (
    <>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
    </>
  )
}

export default Navbar