import React from "react";
import Pokecard from "./Pokecard"
import pokemon from "./pokemon"

const Pokedex = () => {
    return (
        <div>
            <h1>Pokemon Information:</h1>
            <div>
                {pokemon.map(p => {
                    <Pokecard 
                    species={p.name} type={p.type}
                    b_ex={p.base_experience} />         
                })
            }
            </div>
        </div>
    )
}

export default Pokedex;