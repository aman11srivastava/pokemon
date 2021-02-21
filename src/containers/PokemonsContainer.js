import React from "react";
import { useQuery } from '@apollo/react-hooks'
import { GET_POKEMONS } from '../graphql/getPokemons'
import Pokemon from "../components/Pokemon";

const POKEMON_COUNT = 100;

export const PokemonsContainer = () => {

    const { loading, data } = useQuery(GET_POKEMONS, {
        variables: {
            first: POKEMON_COUNT
        }
    })

    if(loading && !data) return <h1 style={ { textAlign: 'center', marginTop: '10rem' } }>Loading...</h1>

    return (
        <div className= "container">
            { data && data.pokemons && data.pokemons.map((pokemon) => <Pokemon key = {pokemon.id} pokemon={pokemon}/>) }
        </div>
    )
}

export default PokemonsContainer