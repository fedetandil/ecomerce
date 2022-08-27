import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import QuantityInput from "./QuantityInput/QuantityInput";


export default function ProductCard({name,image,price,stock}) {
    return (
        <Card sx={{ maxWidth: 350 }} style={{margin:"auto",marginTop:15}} >
            <CardMedia style={{width: "auto",margin:"auto",
                maxHeight: "200px"}}
                component="img"
                alt="green iguana"
                image={image}
            />
            <CardContent style={{display:"flex",justifyContent:"space-between"}}>
                <Typography gutterBottom variant="h6" component="div">
                    {name}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                    ${price}
                </Typography>
            </CardContent>
            <QuantityInput stock={stock}/>
            <CardActions>
                <Button size="small"><ShoppingCartIcon/> Agregar al carrito</Button>
                <Button size="small"><FavoriteIcon/> Agregar a favoritos</Button>
            </CardActions>
        </Card>
    );
}
