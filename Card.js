import React from 'react'
import './Card.css'

const Card = ( {pokemon} ) => {
  return (
    <div className='card'>
        <div className='card-Img'>
            <img src={pokemon.sprites.front_default} alt=''></img>
        </div>
        <div className='card-Info'>
            <h3>{pokemon.name}</h3>
            <div>type: {pokemon.types[0].type.name}</div>
            <div>重さ:{pokemon.weight}</div>
            <div>高さ:{pokemon.height}</div>
            <div>アビリティ:{pokemon.abilities[0].ability.name}</div>
        </div>
    </div>
  )
}

export default Card