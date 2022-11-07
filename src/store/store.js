import { configureStore } from '@reduxjs/toolkit'
import pokemonReducer from '../reducer/pokemonReducer'

export const store = configureStore({

  reducer: {pokemonReducer},

})