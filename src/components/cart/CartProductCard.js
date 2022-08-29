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


export default function CardProductCard({name,image,price,stock}) {
    return (
        <Card sx={{ maxWidth: 500 }} style={{margin:"auto",marginTop:15,display:"flex",flexDirection:"row"}} >
            <CardMedia style={{width: "auto",margin:"auto",
                maxHeight: "100px"}}
                       component="img"
                       alt="green iguana"
                       image={image}
            />
            <CardContent style={{display:"flex",justifyContent:"space-between"}}>
                <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap"}}>


                <Typography gutterBottom  component="div" style={{margin:"auto"}}>
                    {name}
                </Typography>
                <Typography gutterBottom  component="div" >
                    ${price}
                </Typography>
                </div>
            </CardContent>
            <QuantityInput stock={stock}/>
            <CardActions>
                <Button size="small"><ShoppingCartIcon/>Delete</Button>
            </CardActions>
        </Card>
    );
}
