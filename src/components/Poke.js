import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import * as ReactBootStrap from 'react-bootstrap'

function Poke({ poke }) {
    const [image, setImage] = useState("");
    const [weight, setWeight] = useState("");
    const [id, setId] = useState(null);
    const [loader, setLoader] = useState(false)
    useEffect(() => {

        try {
            setLoader(true)
            axios.get(poke.url)
                .then(res => {
                    console.log(res.data)
                    setImage(res.data.sprites.other.dream_world.front_default)
                    setWeight((res.data.weight) / 10 + " kg")
                    setId(res.data.id)
                    setLoader(false)
                })

        } catch (error) {
            setLoader(false)
            console.log(error)
        }


    }, [])
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia align="center" className='card1'>
                {!loader ?
                    <>
                        <p className='titre'>{id}</p>
                        <img src={image} className="image" />
                    </>
                    : (
                        <div className='flex justify-center items-center h-full w-full' >
                            <ReactBootStrap.Spinner animation="border" class="text-center" />
                        </div>
                    )
                }
            </CardMedia>
            <CardContent>
                <Typography gutterBottom variant="h5" className='title' component="div">
                    {poke.name}
                </Typography>
                <Typography variant="h6" color="text.secondary">

                    {!loader ? <span>{weight}</span>
                        : (<span>Poids: please waitt....</span>)
                    }
                </Typography>
            </CardContent>
            <CardActions>
                {/* <Button color='secondary' variant="contained">Voir plus</Button> */}
            </CardActions>
        </Card>
    )
}

export default Poke