import logo from './logo.svg';
import './App.css';
import axios from "axios";
import { config } from './components/config';
import ListPokemon from './components/ListPokemon';
import Liste from './components/Liste';
import React from 'react';
import PokemonDetail from './components/PokemonDetail';
import { Routes } from 'react-router-dom';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Test from './components/Test';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Liste />
  },
  {
    path: "/Detail/:PokeId",
    element: <PokemonDetail />
  }
])

function App() {
  return (
    <div className='container'>
      <RouterProvider router={router} />
      {/* <Liste/> */}

    </div>
  )
}

export default App
