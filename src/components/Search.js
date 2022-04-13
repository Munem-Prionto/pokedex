import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
export default function Search() {
    const navigate = useNavigate();
    const [inputTxt , setInputTxt] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputTxt) {
           navigate(`/pokemon/${inputTxt}`)
        }
       
    }
  return (
    <div className='Search'>
        <form onSubmit={handleSubmit}>
                          <input type="text" onChange={(e)=> setInputTxt(e.target.value.trim().toLowerCase())} placeholder="Search any Pokemon"/>

          <span onClick={handleSubmit}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></span>
        </form>
    </div>
  )
}
