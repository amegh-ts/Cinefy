import React from 'react'

interface NavItem {
    link: string;
    name: string;
}

interface NavItemsProps {
    nav: NavItem;
}

const NavItems: React.FC<NavItemsProps>  = ({ nav }) => {
    return (
        <li>
            <a href={nav.link}>{nav.name}</a>
        </li>
    )
}

export default NavItems