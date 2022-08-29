import React, {useState,useEffect} from 'react';
import CartContext from './CartContext';

export default function CartState(props) {

    const initialState = {
        items : [
            {
                "image": "https://www.cetrogar.com.ar/media/catalog/product/l/b/lb3206_7_.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
                "key": "7",
                "name": "Heladera Kohinoor",
                "price": "150000",
                "stock": 5
            },
            {
                "name": "Cocina Electrolux",
                "image": "https://www.cetrogar.com.ar/media/catalog/product/l/b/lb2605_3.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:",
                "price": "89000",
                "key": "8",
                "stock": 5
            },
            {
                "name": "Cocina Florencia",
                "image": "https://www.cetrogar.com.ar/media/catalog/product/l/b/lb2776-1_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=500&width=500&canvas=500:500",
                "price": "121000",
                "key": "9",
                "stock": 5
            },
            {
                "name": "Cocina Volcan",
                "image": "https://www.cetrogar.com.ar/media/catalog/product/8/7/87644v_frente_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=500&width=500&canvas=500:500",
                "price": "64000",
                "key": "11",
                "stock": 5
            }
        ],
        totalItems : 4,
    }

    const [state, setState] = useState(initialState);

    const addItem = () => {
        console.log(state.items);
    }

    const isOnCart = () => {
        console.log("no");
    }

    const removeItem = () => {
        console.log(state.items);
    }


    return (
        <CartContext.Provider value={{
            items : state.items,
            totalItems: state.totalItems,
            addItem,
            isOnCart,
            removeItem
        }}>
            {props.children}
        </CartContext.Provider>
    );
};
