import React from 'react'
import {  useState } from 'react';

import useFetch from '../hooks/useFetch'

import Poke from './HomePoke';

import Heading from '../components/Heading';
import Search from '../components/Search';

export default function Home() {
    const [url , setUrl ] = useState('https://pokeapi.co/api/v2/pokemon')

    const {data : pokeData , loading , err} =  useFetch(url)
    return (
        <div className='HomePage'>      
            <Heading></Heading>    
            <Search></Search>    

            {loading && <div>Loading....</div>}
            {err && <div>{err}</div>}
            <div className='container'>
            {pokeData && 
                pokeData.results.map(poke => {
                return <Poke key={poke.name} name={poke.name}></Poke>
                })
            }
            </div>

            <div className="pagination">
                <button onClick={()=> {
                    if(pokeData && pokeData.previous) {
                    setUrl(pokeData.previous)
                    }
                }}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
                        <path  d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
                        </svg>
             </button>
            <button onClick={()=> {
                if(pokeData && pokeData.next) {
                setUrl(pokeData.next)
                }
            }}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                <path d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                </svg>
                </button> 
            </div>
        </div>
    )
}
