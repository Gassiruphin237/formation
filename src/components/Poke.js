import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Poke({ poke }) {
    const [image, setImage] = useState("");
    const [weight, setWeight] = useState("");
    const [id, setId] = useState(null);
    useEffect(() => {
        axios.get(poke.url)
            .then(res => {
                console.log(res.data)
                setImage(res.data.sprites.other.dream_world.front_default)
                setWeight((res.data.weight) / 10 + " kg")
                setId(res.data.id)
            })

    }, [])
    return (
        <Card  sx={{ maxWidth: 345 }}>
            <CardMedia align="center" className='card1'>
                <p className='titre'>{id}</p>
                <img src={image} className="image" />
            </CardMedia>
            <CardContent>
                <Typography gutterBottom variant="h5" className='title' component="div">
                    {poke.name}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                    Poids: {weight}
                </Typography>
            </CardContent>
            <CardActions>
                <Button color='secondary' variant="contained">Voir plus</Button>
            </CardActions>
        </Card>
    )
}

export default Poke