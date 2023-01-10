import { useParams } from "react-router-dom"

import bddesc from "../../../backend/bddesc"

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';

const RoomDetails = () => {
    let { roomId } = useParams()
    const thisRoom = bddesc.filter(room => room.name === roomId)[0]

    return(
        <Card sx={{ maxWidth: 1000, m: 3 }}>
        <CardMedia
          image={thisRoom.img}
          component="img"
          title={thisRoom.name}
          sx={{ maxHeight: 400 }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {thisRoom.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {thisRoom.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">
            <Link sx={{ textDecoration: "none" }} href={`/`}>
                Retour
            </Link>
          </Button>
        </CardActions>
      </Card>
    )
}

export default RoomDetails