import React from 'react'

import useFetch from '../hooks/useFetch'

export default function Name({id}) {
    const {data : species} = useFetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)

  return species && <h2>{species.name} ( {species.names[0].name} ) </h2>
}
