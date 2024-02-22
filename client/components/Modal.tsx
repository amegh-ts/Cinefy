import React from 'react'
import './Modal.scss'
import { IoCloseCircleOutline } from "react-icons/io5";

interface ModalProps {
    movie: {
      video: string;
      title: string;
    };
    toggleModal: () => void;
    status: boolean;
  }

const Modal: React.FC<ModalProps> = ({ movie, toggleModal, status }) => {
    return (
        <div className={`movieModal ${status ? 'active' : undefined}`}>
            <a href="#" className='modalClose' onClick={toggleModal}>
                <IoCloseCircleOutline />
            </a>
            <iframe src={movie.video} width={1280} height={720} title={`${movie.title} | Official Trailer`} allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowFullScreen></iframe>
        </div>
    )
}

export default Modal