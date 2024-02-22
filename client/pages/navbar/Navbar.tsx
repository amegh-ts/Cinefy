import NavItems from '@/components/NavItems'
import React from 'react'
import navListData from '../../data/NavListData'
import './Navbar.scss'
import Search from '@/components/Search'
import Button from '@/components/Button'
import { IoEnterOutline } from "react-icons/io5";


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
            <Button icon={<IoEnterOutline />} name="SIGN IN"/>
        </header>
    )
}

export default Navbar