import React from 'react'

interface ButtonProps {
    icon: React.ReactNode;
    name: string;
    bgColor?: string;
    color?: string;
}

const Button: React.FC<ButtonProps> = ({icon,name,bgColor='#ff3700',color='#ffffff'}) => {
    return (
        <a href="#" className="mainBtn" style={{color:color,background:bgColor}}>{icon}{name}</a>
    )
}

export default Button