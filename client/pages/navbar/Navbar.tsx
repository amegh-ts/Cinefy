import NavItems from '@/components/NavItems'
import React from 'react'
import './Navbar.scss'

const Navbar = () => {
  return (
    <header className='Navbar'>
        <a href="" className='logo'>CINEFY</a>
        <ul className="nav">
            <NavItems name="Home"/>
            <NavItems name="Home"/>
        </ul>
    </header>
  )
}

export default Navbar