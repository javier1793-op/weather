import React from 'react'
import '../Css/search.scss'
import { FcSearch } from "react-icons/fc";

const Search = ({setCity, handleSubmit}) => {
  return (
    <div className="searchContainer">
      <form onSubmit={handleSubmit}>
        <div className="box">
          <FcSearch className='icon'/>
        <input 
        type="text"
        placeholder='City'
        onChange={(e) => setCity(e.target.value)}
        />
        </div>
        <button type='submit'>see</button>
      </form>
    </div>
  )
}

export default Search