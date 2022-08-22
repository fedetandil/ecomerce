import React, {useState, useEffect} from 'react';
import CategoryBanner from "./banner/CategoryBanner";
import ProductCard from "../../product/ProductCard";
import Grid from "@mui/material/Grid";





export default function CategoryHomeLayout({categoryName,items}) {

   let  data = [<CategoryBanner key="bannerkey" name={categoryName}/>];
    const images = require.context("./images/products", true);

    items.forEach(item => {
        const {name,image,price,key} = item;
        data = [...data,<ProductCard key={key} name={name} image={images(image)} price={price}/>]
    })
    return (
        <>

            <Grid  container
                   direction="row"
                   justify="space-evenly"
                   alignItems="stretch"
                   style={{marginTop:5}}>
                {data}
            </Grid>


        </>
    );
};
