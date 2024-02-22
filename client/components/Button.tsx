import React from 'react'

const Button = ({icon,name,bgColor='#ff3700',color='#ffffff'}) => {
    return (
        <a href="#" className="mainBtn" style={{color:color,background:bgColor}}>{icon}{name}</a>
    )
}

export default Button