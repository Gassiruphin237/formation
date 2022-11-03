import React from 'react'
import { useParams } from 'react-router-dom'

function PokemonDetail() {

  let { PokeId } = useParams();
  console.log(PokeId);
  return (
    <div>PokemonDetail</div>
  )
}

export default PokemonDetail