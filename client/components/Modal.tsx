import React from 'react'
import { IoCloseCircleOutline } from "react-icons/io5";

const Modal = ({movie}) => {
    return (
        <div className='movieModal'>
            <a href="#" className='modalClose'>
                <IoCloseCircleOutline />
            </a>
            <iframe src={movie.video} frameborder="0" width={1280} height={720} title={`${movie.title} | Official Trailer`} allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowFullScreen></iframe>
        </div>
    )
}

export default Modal