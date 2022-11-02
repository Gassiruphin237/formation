import logo from './logo.svg';
import './App.css';
import axios from "axios";
import { config } from './components/config';
import ListPokemon from './components/ListPokemon';
import Liste from './components/Liste';
import React from 'react';

function App(props) {
  return (
    <div>
      <Liste/>
    {/* bonjour {props.name="ruphin"} */}
    </div>
  )
}

export default App
