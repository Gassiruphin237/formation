import React, { useEffect, useState } from 'react'
import Poke from './Poke'
import { config } from './config';
import axios from 'axios';
function Liste() {

    const [loader, setLoader] = useState(false)
    const [listePokemonData, setListePokemonData] = useState([]);

    useEffect(() => {
        try {
            setLoader(true)
            axios.get(config.url)
                .then(res => {
                    console.log(res.data.results)
                    setListePokemonData(res.data.results)
                    setLoader(false)
                })
        } catch (error) {
            console.log(error)
            setLoader(false)
        }

    }, [])

    return (
        <div className='row1'>

            {/* {!loader ? listePokemonData.map((item, index) => (
                    <Poke poke={item} key={index} />
                )):<ReactBootStrap.Spinner animation="border" />
            } */
                listePokemonData.map((item, index) => (
                    <Poke poke={item} key={index} />
                ))
            }

        </div>
    )
}

export default Liste