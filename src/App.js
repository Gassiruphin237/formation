import logo from './logo.svg';
import './App.css';
import axios from "axios";
import { config } from './components/config';
import ListPokemon from './components/ListPokemon';
import React from 'react';

class App extends React.Component {

  render() {
    return (
      <div className="container" >
        <ListPokemon />
      </div >
    )
  }
}
export default App;
