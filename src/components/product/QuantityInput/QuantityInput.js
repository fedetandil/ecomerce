import React, {useState, useEffect} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


export default function QuantityInput({stock}) {

    const [initialQuantity, setInitialQuantity] = useState(1);
    const [quantity, setQuantity] = useState(1);
    let initStock = 1;

    return (
        <>
            <div style={{display: "flex"}}>
                {quantity <= initialQuantity ? <Button className={"size"} disabled={true}><RemoveIcon/></Button> :
                    <Button className={"size"} onClick={minusItem}><RemoveIcon/></Button>}
                <TextField
                    type="tel"
                    value={quantity}
                    sx={{
                        '& legend': {display: 'none'},
                        '& fieldset': {top: 0},
                    }}
                    inputProps={{readOnly:true, style: {textAlign: "center", fontSize: "medium"}}}
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
                {quantity >= stock ? <Button className={"size"} disabled={true}><AddIcon/></Button> :
                    <Button className={"size"} onClick={plusItem}><AddIcon/></Button>}


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
