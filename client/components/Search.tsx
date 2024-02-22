import React from 'react'
import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <div className='Search'>
        <input type="text" placeholder='Search' />
        <IoSearch className='search-icon'/>
    </div>
  )
}

export default Search