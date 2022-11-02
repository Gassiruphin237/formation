import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';

function Poke({ poke }) {
    const [image, setImage] = useState("");
    useEffect(() => {
        axios.get(poke.url)
            .then(res => {
                console.log(res.data.sprites.other.dream_world.front_default)
                setImage(res.data.sprites.other.dream_world.front_default)
            })

    }, [])
    return (
        <>
            <div>
                {poke.name}
            </div>
            <div>
                <img src={image} />
            </div>
        </>
    )
}

export default Poke