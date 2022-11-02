import React, { useEffect, useState } from 'react'
import Poke from './Poke'
import { config } from './config';
import axios from 'axios';
function Liste() {
    useState([])
    const [listePokemonData, setListePokemonData] = useState([]);
    useEffect(() => {
        axios.get(config.url)
            .then(res => {
                console.log(res.data.results)
                setListePokemonData(res.data.results)
            })

    }, [])

    return (
        <div className='row1'>
            {
                listePokemonData.map((item, index) => (

                    <Poke poke={item} key={index} />? <Poke poke={item} key={index} />:"loading"
                ))
                
            }
        </div>
    )
}

export default Liste