import NavItems from '@/components/NavItems'
import React from 'react'
import navListData from '../../data/NavListData'
import './Navbar.scss'
import Search from '@/components/Search'

const Navbar = () => {
    return (
        <header className='Navbar'>
            <a href="" className='logo'>CINEFY</a>
            <ul className="nav">
                {navListData.map(nav => (
                    <NavItems key={nav._id} nav={nav} />
                ))}
            </ul>
            <Search/>
        </header>
    )
}

export default Navbar