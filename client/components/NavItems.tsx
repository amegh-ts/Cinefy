import React from 'react'

const NavItems = ({ nav }) => {
    return (
        <li>
            <a href={nav.link}>{nav.name}</a>
        </li>
    )
}

export default NavItems