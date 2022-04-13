import React from 'react'

import useFetch from '../hooks/useFetch'

export default function Description({id}) {
    const {data : species} = useFetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)

  return species && <p>{species.flavor_text_entries[1].flavor_text}</p>
}
