import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { CardActionArea } from '@mui/material';

export default function CardHero(props) {
  return (
    <Card sx={{ maxWidth: 400, minHeight:300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image= {props.personagem.image.path +"."+props.personagem.image.extension}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.personagem.nome}
          </Typography>
       
          <Button size="small" color="error" variant="outlined">Detalhes</Button>
        </CardContent>
        
      </CardActionArea>
    </Card>
  );
}