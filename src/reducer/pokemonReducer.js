import { createSlice } from '@reduxjs/toolkit'

export const pokemonReducer = createSlice({
    name:"pokemonReducer",
    initialState:{
        pokemonFavoris:[]
    },
    reducers:{
        tooglePokemonFavoris:(state,action)=>{

            state.pokemonFavoris=[...state.pokemonFavoris, action.payload]
        }
    }
})
export const { tooglePokemonFavoris } = pokemonReducer.actions

export default pokemonReducer.reducer