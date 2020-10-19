import React from "react"

const Pokecard = ({species, type, b_ex}) => {
    return (
        <div>
            <h4> {species} </h4>
            <h5> of type {type} </h5>
            <span>current experience: {b_ex}</span>
        </div>  
    )
}

export default Pokecard;