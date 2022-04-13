import React from 'react'
import useFetch from '../hooks/useFetch'
import { Link } from 'react-router-dom'
import Credits from '../components/Credits'

export default function HomePoke({name}) {
    const {data , loading , err } = useFetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const formatNumber = (n) => {
      if (n < 10) {
        return `00${n}`;
      }
      else if(n < 100) {
        return `0${n}`;
      }
      else {
        return n;
      }
    }
    return (

    <>
      {data && 
        <div className={`HomePokePage ${data.types[0].type.name}`}>
          <Link to={`pokemon/${data.id}`}>
            <section className='flex-container'>
              <div className='imgDiv'>
                <img src={data.sprites.front_default} alt=""/>
              </div>
              <div className='infoDiv'>
                <div>#{formatNumber(data.id)}</div>
                <div>{data.name}</div>
              </div>
            </section>
          </Link>
        </div>
      }
      <Credits></Credits>
    </>
  )
}
