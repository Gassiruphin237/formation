import logo from './logo.svg';
import './App.css';
import axios from "axios";
import { config } from './components/config';
import ListPokemon from './components/ListPokemon';
import Liste from './components/Liste';
import React from 'react';

function App(props) {
  return (
    <div className='container'>
      <Liste/>
    </div>
  )
}

export default App
