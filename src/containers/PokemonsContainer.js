import React from "react";
import { useQuery } from '@apollo/react-hooks'
import { GET_POKEMONS } from '../graphql/getPokemons'
import Pokemon from "../components/Pokemon";
import ReactSpinner from 'react-bootstrap-spinner'
import "bootstrap/dist/css/bootstrap.min.css";

const POKEMON_COUNT = 100;

export const PokemonsContainer = () => {

    const { loading, data, error } = useQuery(GET_POKEMONS, {
        variables: {
            first: POKEMON_COUNT
        }
    })

    // Handling Loading state
    if(loading && !data){
        return (
            <div  style={ { textAlign: 'center', marginTop: '10rem'} }>
                <ReactSpinner type="border" size="5" />
            </div>
        )
    }

    // Handling error state
    if(error && !data){
        return(
            <>
                <h1 style={ { textAlign: 'center', marginTop: '13rem' } }>Unable to fetch data from the server.</h1>
                <p style={ { textAlign: 'center'} }>Check your internet connection or try again after some time.</p>
            </>
        )
    }

    return (
        <div className= "container">
            { data && data.pokemons && data.pokemons.map((pokemon) => <Pokemon key = {pokemon.id} pokemon={pokemon}/>) }
        </div>
    )
}

export default PokemonsContainer