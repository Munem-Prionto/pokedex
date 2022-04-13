import './Pokemon.css'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState } from 'react';
import useFetch from '../hooks/useFetch';


import BarChart from '../components/BarChart';
import LineChart from '../components/LineChart';
import PieChart from '../components/PieChart';

import Heading from '../components/Heading';
import Description from '../components/Description';
import Name from '../components/Name';

export default function Pokemon() {

  const {id}= useParams();
  const [url , setUrl] = useState(`https://pokeapi.co/api/v2/pokemon/${id}`)
  const {data , loading , err } = useFetch(url)

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
    <div className='PokemonPage'>
      <Heading></Heading>
      {err && <h1>{err}</h1>}
      {data && 
        <div className={`container border-${data.types[0].type.name}`}>
          <div className='info'>
              <div className='header'>
                <img src={data.sprites.other['official-artwork'].front_default} alt=""/>
              </div>
              <div className='name'>
                <h2>#{formatNumber(data.id)}</h2> <Name id={data.id}></Name>
              </div>
                <div className="types">
                {data.types.map((type, index)=> <span key={index} className={`small-${type.type.name}`}> {type.type.name} </span>)}
              </div>
              <div className="desc">
                <Description id={data.id}></Description>
              </div>
          </div>
          <div>
             
             
            <div className={`abilities`}>
              <h4>Abilities</h4> 
              {data.abilities.map((ability , index) => <span className='rounded-span' key={index}>{ability.ability.name} </span>)}
            </div>
            <div className='basic-stats'>
              <h4>Base Exp : {data.base_experience}</h4> 
              <h4>Height : {data.height / 10} m</h4>
              <h4>Weight : {data.weight / 10}kg</h4>
              
            </div>
            <div className='moves'>
              <h4>Moves </h4>
              <div>
                {data.moves.slice(0, 20).map((move,index) => <span className='rounded-span' key={index}>{move.move.name} </span>)}
              </div>
            </div>
            <div className="stats">
              <h4>Stats</h4>
              {data.stats.map((stat , index)=> {
                return (
                  <p key={index}>
                    {stat.stat.name} - {stat.base_stat}
                  </p>
                )
              })}
            </div>
          </div>
        </div>
      }
    </div>
  )
}
