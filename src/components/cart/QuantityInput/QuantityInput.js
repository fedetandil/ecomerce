import React, {useState, useEffect} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/ArrowDropUp';
import RemoveIcon from '@mui/icons-material/ArrowDropDown';


export default function QuantityInput({stock}) {

    const [initialQuantity, setInitialQuantity] = useState(1);
    const [quantity, setQuantity] = useState(1);
    let initStock = 1;

    return (
        <>
            <div style={{display: "flex",flexDirection:"column"}}>
                {quantity >= stock ? <Button disabled={true}><AddIcon/></Button> :
                    <Button onClick={plusItem}><AddIcon/></Button>}
                <TextField
                    type="tel"
                    value={quantity}
                    sx={{
                        '& legend': {display: 'none'},
                        '& fieldset': {top: 0},
                    }}
                    inputProps={{readOnly:true, style: {textAlign: "center", fontSize: "small"}}}
                    onChange={(e) => {
                        if (parseInt(e.target.value) >= stock) {
                            setQuantity(
                                stock
                            );
                        } else if (parseInt(e.target.value) <= initStock) {
                            setQuantity(
                                initStock
                            );
                        } else if (isNaN(e.target.value)) {
                            setQuantity(initStock);
                        } else {
                            setQuantity(parseInt(e.target.value));
                        }
                    }}
                />
                {quantity <= initialQuantity ? <Button  disabled={true}><RemoveIcon/></Button> :
                    <Button  onClick={minusItem}><RemoveIcon/></Button>}



            </div>

        </>

    );


    function plusItem() {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        } else {
            setQuantity(stock)
        }
    }

    function minusItem() {
        if (quantity < initStock) {
            setQuantity(initStock)
        } else {
            setQuantity(quantity - 1)
        }
    }
};
