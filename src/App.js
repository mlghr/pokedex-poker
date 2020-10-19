import React from 'react';
import pokemon from "./pokemon"
import Pokedex from "./Pokedex"
import './App.css';

function App() {
  return (
    <div className="App">
      <Pokedex pokemon={pokemon}></Pokedex>
    </div>
  );
}

export default App;
