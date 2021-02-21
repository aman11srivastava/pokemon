import {gql} from 'graphql-tag'

export const GET_POKEMONS = gql`query
    pokemons($first: Int!){
      pokemons(first: $first){
        id
        image
        name
        maxHP
        maxCP
        attacks{
          special{
            name
            damage
          }
        }
    }    
}
`